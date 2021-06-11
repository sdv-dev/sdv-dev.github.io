const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)
const util = require('util');
const glob = require("glob")
const fs = require('fs');
const md5 = require('md5');
const hash = md5(`${new Date().getTime()}`)

const addPageDataVersion = async file => {
  const stats = await util.promisify(fs.stat)(file)
  if (stats.isFile()) {
    console.log(`Adding version to page-data.json in ${file}..`)
    let content = await util.promisify(fs.readFile)(file, 'utf8')
    const result = content.replace(
      /page-data.json(\?v=[a-f0-9]{32})?/g,
      `page-data.json?v=${hash}`
    )
    await util.promisify(fs.writeFile)(file, result, 'utf8')
  }
}

exports.onPostBootstrap = async () => {
  const loader = path.join(__dirname, 'node_modules/gatsby/cache-dir/loader.js')
  await addPageDataVersion(loader)
}

exports.onPostBuild = async () => {
  const publicPath = path.join(__dirname, 'public')
  const htmlAndJSFiles = glob.sync(`${publicPath}/**/*.{html,js}`)
  for (let file of htmlAndJSFiles) {
    await addPageDataVersion(file)
  }
}

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        slug
                    }
                }
            }
            allGhostTag(sort: { order: ASC, fields: name }) {
                edges {
                    node {
                        slug
                        url
                        postCount
                    }
                }
            }
            allGhostAuthor(sort: { order: ASC, fields: name }) {
                edges {
                    node {
                        slug
                        url
                        postCount
                    }
                }
            }
            allGhostPage(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        slug
                        url
                    }
                }
            }
        }
    `)

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    // Extract query results
    const tags = result.data.allGhostTag.edges
    const authors = result.data.allGhostAuthor.edges
    const pages = result.data.allGhostPage.edges
    const posts = result.data.allGhostPost.edges

    // Load templates
    const indexTemplate = path.resolve(`./src/templates/index.js`)
    const tagsTemplate = path.resolve(`./src/templates/tag.js`)
    const authorTemplate = path.resolve(`./src/templates/author.js`)
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    const postTemplate = path.resolve(`./src/templates/post.js`)

    // Create tag pages
    tags.forEach(({ node }) => {
        const totalPosts = node.postCount !== null ? node.postCount : 0

        // This part here defines, that our tag pages will use
        // a `/tag/:slug/` permalink.
        const url = `/tag/${node.slug}`

        const items = Array.from({length: totalPosts})

        // Create pagination
        paginate({
            createPage,
            items: items,
            itemsPerPage: postsPerPage,
            component: tagsTemplate,
            pathPrefix: ({ pageNumber }) => (pageNumber === 0) ? url : `${url}/page`,
            context: {
                slug: node.slug
            }
        })
    })

    // Create author pages
    authors.forEach(({ node }) => {
        const totalPosts = node.postCount !== null ? node.postCount : 0

        // This part here defines, that our author pages will use
        // a `/author/:slug/` permalink.
        const url = `/author/${node.slug}`

        const items = Array.from({length: totalPosts})

        // Create pagination
        paginate({
            createPage,
            items: items,
            itemsPerPage: postsPerPage,
            component: authorTemplate,
            pathPrefix: ({ pageNumber }) => (pageNumber === 0) ? url : `${url}/page`,
            context: {
                slug: node.slug
            }
        })
    })

    // Create pages
    pages.forEach(({ node }) => {
        // This part here defines, that our pages will use
        // a `/:slug/` permalink.
        node.url = `/${node.slug}/`

        createPage({
            path: node.url,
            component: pageTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        })
    })

    // Create post pages
    posts.forEach(({ node }) => {
        // This part here defines, that our posts will use
        // a `/:slug/` permalink.
        node.url = `/${node.slug}/`

        createPage({
            path: node.url,
            component: postTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        })
    })

    // Create pagination
    paginate({
        createPage,
        items: posts,
        itemsPerPage: postsPerPage,
        component: indexTemplate,
        pathPrefix: ({ pageNumber }) => {
            if (pageNumber === 0) {
                return `/`
            } else {
                return `/page`
            }
        },
    })
}
