/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BackgroundImage from "gatsby-background-image"

import Container from "../components/container"
import Layout from "../components/layout"
import WeddingGallery from "../components/wedding-gallery"

const ServicesWedding = ({ data }) => {
  const {
    servicesWedding,
    servicesWedding1,
    servicesWedding2,
    servicesWedding3,
  } = data
  return (
    <Layout>
      <BackgroundImage
        fluid={servicesWedding.sharp.fluid}
        sx={{
          height: [150, 250, 400],
        }}
      >
        <Container>
          <h1
            sx={{
              m: 0,
              pt: [1, 4, 5],
              fontSize: [4, 6, 7],
              fontWeight: "semibold",
              color: "white",
            }}
          >
            SWEETS FOR<br></br>WEDDING CELEBRATIONS
          </h1>
        </Container>
      </BackgroundImage>
      <div
        sx={{
          textAlign: "center",
          margin: [2, 5],
        }}
      >
        <p
          sx={{
            m: 0,
            pt: [4, 5],
            fontSize: [2],
            fontWeight: "medium",
            letterSpacing: "tight",
          }}
        >
          We can provide a wide array of desserts for all your wedding
          celebrations including:{" "}
        </p>
        <div
          sx={{
            color: "grey",
            letterSpacing: "tight",
          }}
        >
          <p>Wedding cakes</p> <p>Engagement party cakes</p> <p>Shower cakes</p>{" "}
          <p>
            Shower favors: individually bagged or boxed frosted sugar cookies or
            cupcakes
          </p>{" "}
          <p>Hotel room amenities for out of town guests</p>{" "}
          <p>Themed grooms’ cakes</p>
        </div>
      </div>

      <div sx={{ paddingBottom: [3] }}>
        <BackgroundImage
          fluid={servicesWedding1.sharp.fluid}
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
              MINIATURE DESSERT BAR
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
              An array of your favorite classic treats invites your guests to{" "}
              <br />
              taste a bite (or two!) of everything.
            </p>
          </div>
        </BackgroundImage>
      </div>

      <div sx={{ paddingBottom: [3] }}>
        <BackgroundImage
          fluid={servicesWedding2.sharp.fluid}
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
              CUPCAKE TOWER
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
              Create an impressive display with Cake Art's signature cupcakes,
              <br />
              custom-decorated to match your theme. Perfect on their own or to
              <br />
              supplement your wedding cake.
            </p>
          </div>
        </BackgroundImage>
      </div>

      <div sx={{ paddingBottom: [3] }}>
        <BackgroundImage
          fluid={servicesWedding3.sharp.fluid}
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
              HAND-DECORATED TIER CAKES
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
              Customized with your choice of cake flavor, filling and frosting.
              <br />
              All cakes are baked entirely from scratch and hand-decorated in
              <br />
              American buttercream.
            </p>
          </div>
        </BackgroundImage>
      </div>

      <div
        sx={{
          textAlign: "center",
          margin: [2, 5],
        }}
      >
        <p
          sx={{
            m: 0,
            pt: [1],
            pb:[5],
            color: "grey",
            letterSpacing: "tight",
          }}
        >
          Please call the{" "}
          <a
            href="/location"
            sx={{ color: "#F78DA7", border: "none"}}
          >
            bakery
          </a>{" "}
          to speak with our Celebration Specialist to book a tasting
          and consultation.
        </p>
      </div>

      <Container>
        <WeddingGallery ></WeddingGallery>
      </Container>
    </Layout>
  )
}

export default ServicesWedding

export const query = graphql`
  query {
    servicesWedding: file(
      relativePath: { eq: "services-wedding/services-wedding4.jpg" }
    ) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }

    servicesWedding1: file(
      relativePath: { eq: "services-wedding/services-wedding1.jpg" }
    ) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }

    servicesWedding2: file(
      relativePath: { eq: "services-wedding/services-wedding2.jpg" }
    ) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }

    servicesWedding3: file(
      relativePath: { eq: "services-wedding/services-wedding3.jpg" }
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
