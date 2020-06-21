const slugify = require("slugify")

const slugifyOptions = {
  replacement: "-",
  lower: true,
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type StripeProduct implements Node{
        slug: String!
    }
    `)
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    StripeProduct: {
      slug: {
        resolve: source => slugify(source.name, slugifyOptions),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const products = (
    await graphql(`
      {
        allStripeProduct {
          nodes {
            name
            slug
            id
          }
        }
      }
    `)
  ).data.allStripeProduct.nodes

  products.forEach(product => {
    actions.createPage({
      path: `products/${product.slug}`,
      component: require.resolve("./src/templates/products.jsx"),
      context: {
        id: product.id,
      },
    })
  })
}
