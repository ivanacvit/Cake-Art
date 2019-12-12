/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import FilteredGallery from "../components/filtered-gallery"
import Container from "../components/container"

const CakeGallery = ({ data }) => {
  const { imageFiles } = data

  return (
    <>
      <Layout>
        <Container>
        
        <h2>
          GALLERY
        </h2>
        <FilteredGallery images={imageFiles.images} />
        
        </Container>
      </Layout>
    </>
  )
}

export default CakeGallery

export const query = graphql`
  {
    imageFiles: allFile(
      filter: { absolutePath: { regex: "//content/images//" } }
    ) {
      images: edges {
        image: node {
          id
          base
          sharp: childImageSharp {
            fluid(maxWidth: 400, traceSVG: { color: "#c3dafe" }) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
