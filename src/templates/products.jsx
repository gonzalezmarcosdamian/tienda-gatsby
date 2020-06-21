import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Product from "../components/Product"

export default props => {
  //console.log(props)

  const product = props.data.stripeProduct
  const prices = props.data.allStripePrice.nodes
  return (
    <Layout>
      <Product prices={prices} product={product} key={product.id}></Product>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    stripeProduct(id: { eq: $id }) {
      name
      slug
      images
    }
    allStripePrice(filter: { product: { eq: $id } }) {
      nodes {
        id
        currency
        created
        unit_amount
        product
      }
    }
  }
`
