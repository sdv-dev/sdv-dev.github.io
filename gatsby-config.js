const path = require(`path`)

module.exports = {
  /* Your site config here */
pathPrefix: "/web-dev",
 plugins: [
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  'gatsby-plugin-postcss',
  'gatsby-plugin-sass',
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
        include: /assets/ // See below to configure properly
      }
    }
  },
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -100
    }
  },
  {
    resolve: `gatsby-source-ghost`,
    options: {
      apiUrl: `https://sdv.ghost.io`,
      contentApiKey: `68a3f60d2555e5dff8a5df9e11`,
    },
  }
  ],
}