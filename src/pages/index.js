/** @jsx jsx */
import React from "react"
import { jsx, useThemeUI} from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Background from "../components/home-page/background"
import HomeGallery from "../components/home-page/home-gallery"
import Button from "../components/button"
import Container from "../components/container"
import HomeService from"../components/home-page/home-service"

const Index = ({ data }) => {
  const { homeGallery, homeService } = data
  const { theme } = useThemeUI()
  return (
    <>
      <Layout>
        <Background />

        <Container>
          <div
            sx={{
              textAlign:"center",
              margin:[2,5],
            }}>
          <h2
            sx={{
              m: 0,
              pt: [4,5],
              fontSize: [3, 3, 4, 4],
              fontWeight: "medium",
              letterSpacing: "tight",
              
            }}
          >
            OUR CAKE GALLERY
          </h2>
          <p
          sx={{
            color:"grey",
            letterSpacing: "tight",
          }}>Check out a selection of some of our cakes below.</p>
          </div>

        <HomeGallery gap={[3]} columns={[2,3,4]} images={homeGallery.images}/>
        
        <Link to="/cakegallery" sx={{ textDecoration: "none" }}>
          <Button>View More</Button>
        </Link>
        </Container>

        <Container>
        <div
            sx={{
              textAlign:"center",
              margin:[2,5],
            }}>
          <h2
            sx={{
              m: 0,
              pt: [4,5],
              fontSize: [3, 3, 4, 4],
              fontWeight: "medium",
              letterSpacing: "tight",
              
            }}
          >
            OUR SERVICES
          </h2>
          <p
          sx={{
            color:"grey",
            letterSpacing: "tight",
          }}>Checkout our range of special cakes we make and different services below.</p>
          </div>
          <HomeService images={homeService.images} ></HomeService> 
        </Container>

      </Layout>
    </>
  )
}

export default Index

export const query = graphql`
  query{
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

    homeService: allFile(
      filter: {
        absolutePath: { regex: "//content/images/home-service//" }
      }
    ) {
      images:edges {
        image:node {
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
