/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product", "Price", "Sku"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    `gatsby-plugin-stripe`,
  ],
  siteMetadata: {
    title: "CF tienda",
    url: "https://codigofacilito.com",
    description: "Buy and enjoy",
  },
}
