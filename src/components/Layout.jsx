import React, { Fragment } from "react"
import Nav from "./Nav"
import SEO from "./SEO"
export default props => {
  return (
    <Fragment>
      <SEO />
      <Nav />
      <main>{props.children}</main>
    </Fragment>
  )
}
