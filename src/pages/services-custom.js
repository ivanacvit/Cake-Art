/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

import Container from "../components/container"
import Layout from "../components/layout"
import Button from "../components/button"

const ServicesCustom = ({ data }) => {
  const { servicesCustom, servicesCustom1 } = data
  return (
    <Layout>
      <BackgroundImage
        fluid={servicesCustom.sharp.fluid}
        sx={{
          height: [150, 250, 400],
        }}
      >
        <Container>
          <h1
            sx={{
              m: 0,
              pt: [4, 4, 5],
              fontSize: [4, 6, 7],
              fontWeight: "semibold",
              color: "white",
            }}
          >
            CUSTOM ORDERS
          </h1>
          <p
            sx={{
              color: "white",
              letterSpacing: "tight",

              "@media (max-width: 800px)": {
                display: "none",
              },
            }}
          >
            Cake Art's skilled and talented cake artists will create what you
            <br />
            can imagine! Find your local bakery to submit a custom order inquiry
            <br />
            for custom cakes, cupcakes or cookies.
          </p>
          <Link to="/index" sx={{ textDecoration: "none" }}>
            <button
              button
              sx={{
                outline: "0",
                color: "#F78DA7",
                border: "1px solid #F78DA7",
                background: "white",
                padding: "12px 28px",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "inherit",
                display: "block",
                marginTop: "20px",
                marginBottom: "0px",
                "&:hover": {
                  boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                },
              }}
            >
              Contact Your Local Bakery
            </button>
          </Link>
        </Container>
      </BackgroundImage>
      <Container>
        <div
          sx={{
            textAlign: "center",
            margin: [2, 5],
          }}
        >
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
              pt: [1],
              pb:[5],
            }}
          >
            We work with you to customize your cake to your specifications. Your
            life’s special events are important, and as such, your cake should
            be extraordinary. We can decorate any size of our specialty layer
            cakes or build a custom cake as you wish! You’ll have your own
            dedicated Celebration Specialist to walk you through the whole
            process.
          </p>
        </div>
      </Container>

      <Container>
        <div sx={{ paddingBottom: [3] }}>
          <BackgroundImage
            fluid={servicesCustom1.sharp.fluid}
            sx={{
              height: [150, 250, 400],
            }}
          >
            <div
              sx={{
                width: "100%",
                maxWidth: "container",
                margin: "0 auto",
                px: [3, 4, 4],
              }}
            >
              <h1
                sx={{
                  m: 0,
                  pt: [4, 4, 5],
                  fontSize: [4, 5, 5],
                  fontWeight: "semibold",
                  color: "white",
                }}
              >
                CUSTOM CAKES
              </h1>
            </div>
          </BackgroundImage>
        </div>
      </Container>
    </Layout>
  )
}

export default ServicesCustom

export const query = graphql`
  query {
    servicesCustom: file(
      relativePath: { eq: "services-custom/services-custom.jpg" }
    ) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }

    servicesCustom1: file(
      relativePath: { eq: "services-custom/services-custom1.jpg" }
    ) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
