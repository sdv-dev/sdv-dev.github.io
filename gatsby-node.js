const path = require(`path`);
const util = require("util");
const glob = require("glob");
const fs = require("fs");
const md5 = require("md5");
const hash = md5(`${new Date().getTime()}`);

const addPageDataVersion = async (file) => {
  const stats = await util.promisify(fs.stat)(file);
  if (stats.isFile()) {
    console.log(`Adding version to page-data.json in ${file}..`);
    let content = await util.promisify(fs.readFile)(file, "utf8");
    const result = content.replace(
      /page-data.json(\?v=[a-f0-9]{32})?/g,
      `page-data.json?v=${hash}`
    );
    await util.promisify(fs.writeFile)(file, result, "utf8");
  }
};

exports.onPostBootstrap = async () => {
  const loader = path.join(
    __dirname,
    "node_modules/gatsby/cache-dir/loader.js"
  );
  await addPageDataVersion(loader);
};

exports.onPostBuild = async () => {
  const publicPath = path.join(__dirname, "public");
  const htmlAndJSFiles = glob.sync(`${publicPath}/**/*.{html,js}`);
  for (let file of htmlAndJSFiles) {
    await addPageDataVersion(file);
  }
};

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Contentful.
 */

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      caseStudies: allContentfulCaseStudy(
        sort: { datePublished: DESC }
        filter: {
          publishLocation: {
            elemMatch: {
              urlLocation: { eq: "https://sdv.dev/community-case-studies/" }
            }
          }
        }
      ) {
        edges {
          node {
            url
          }
        }
      }
    }
  `);

  const caseStudies = result.data.caseStudies.edges;

  caseStudies.forEach(({ node }) => {
    createPage({
      path: `/community-case-studies/${node.url}/`,
      component: require.resolve(`./src/templates/CaseStudy.js`),
      context: {
        url: node.url,
      },
    });
  });
};
