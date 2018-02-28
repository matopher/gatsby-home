module.exports = {
  siteMetadata: {
    title: `Matt Woods`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@matopher`
      },
    },
  ],
}
