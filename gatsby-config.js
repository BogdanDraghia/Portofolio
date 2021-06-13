module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `illustrationsdata`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `illustrationsimages`,
        path: `./static/assets/images/Illustrations`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {},
      },
    },
  ],
}
