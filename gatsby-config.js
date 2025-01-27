module.exports = {
  siteMetadata: {
    title: `Academy - Santiment Technical Documentation`,
    description: `Collected wisdom about the Santiment products, tools, metrics.`,
    author: `Santiment Team`,
    siteUrl: 'https://academy.santiment.net',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['BACKEND_URL'],
      },
    },
    {
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        appId: "ZVVHPHW3IV", // App ID
        apiKey: "ad83a9a7b30fda58f4c61a55a73d9338", // Search API key
        indexName: "santiment_academy", // required
        inputSelector: "#search", // required
        debug: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2F354D`,
        theme_color: `#2F354D`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
          `gatsby-remark-copy-images`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        useClassNames: true,
      }
    }
  ],
}
