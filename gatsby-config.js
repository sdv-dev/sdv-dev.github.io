const path = require(`path`);

module.exports = {
  /* Your site config here */
  pathPrefix: "/web-dev",
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://sdv.ghost.io`,
        contentApiKey: `68a3f60d2555e5dff8a5df9e11`,
      },
    },
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
          // An array of node types and image fields per node
          // Image fields must contain a valid absolute path to the image to be downloaded
          lookup: [
              {
                  type: `GhostAuthor`,
                  imgTags: [`profile_image`],
              },
              {
                  type: `GhostPost`,
                  imgTags: [`feature_image`],
              },
              {
                  type: `GhostPage`,
                  imgTags: [`feature_image`],
              },
              {
                  type: `GhostSettings`,
                  imgTags: [`cover_image`],
              },
          ],
          // Additional condition to exclude nodes 
          // Takes precedence over lookup
          exclude: node => (
              node.ghostId === undefined
          ),
          // Additional information messages useful for debugging
          verbose: true,
          // Option to disable the module (default: false)
          disable: false,
      },
    },
  ],
};
