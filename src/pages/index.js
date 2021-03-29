import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import ImageTextBlock from "../components/imageTextBlock/imageTextBlock"

const LandingPage = ({ data, location }) => {
  const {contentfulPages, allContentfulProductCategory} = data;

  return (
    <Layout {...contentfulPages}>
      <SEO title="Brackets Landing Page" />
      <Navigation />
      <Hero />
      <section id="product-services" className="image-gallery">
        {
          allContentfulProductCategory.nodes.map((category) => {
            return(
              <ImageTextBlock {...category} />
            )
          })
        }
      </section>
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query  {
    contentfulPages {
      slug
      title
      imageBackground {
        id
        file {
          url
          fileName
        }
      }
    }
    allContentfulProductCategory {
      nodes {
        id
        title
        name
        description {
          internal {
            content
          }
        }
        image {
          file {
            url
          }
        }
        link {
          label
          name
        }
      }
    }
  }
`