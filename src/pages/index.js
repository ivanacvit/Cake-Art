/** @jsx jsx */
import React from "react"
import { jsx, useThemeUI } from "theme-ui"

import Layout from "../components/layout"
import Background from "../components/home-page/background"
import HomeGallery from "../components/home-page/home-gallery"
import Container from "../components/container"
import ClickableImages from "../components/clickable-images"

const Index = ({ data }) => {
  const { homeGallery } = data
  const { theme } = useThemeUI()
  return (
    <>
  
      <Layout>
        
        <Background />

        <Container>
          <HomeGallery images={homeGallery.images} />

          <ClickableImages
            sx={{
              textAlign: "center",
              margin: [2, 5],
            }}
          >
            <h2
              sx={{
                m: 0,
                pt: [4, 5],
                fontSize: [3, 3, 4, 4],
                fontWeight: "medium",
                letterSpacing: "tight",
              }}
            >
              OUR SERVICES
            </h2>
          </ClickableImages >
        
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const query = graphql`
  query {
    homeGallery: allFile(
      filter: { absolutePath: { regex: "//content/images/home-gallery//" } }
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
