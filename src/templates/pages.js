import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const PageTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
    </Layout>
  )
}

export default PageTemplate

// export const pageQuery = graphql`
//   query allContentfulPages(
//     $slug: String!
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
