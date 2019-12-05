/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"

import BackgroundImage from "gatsby-background-image"
import Container from "../container"
  
const Background = () => {

const data = useStaticQuery(graphql`
{
    heroImage: file(relativePath: { eq: "images/hero.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  const { heroImage } = data

  return (
    <BackgroundImage
    fluid={heroImage.sharp.fluid}
    sx={{
      height: [150, 250, 350],
    }}
  >
    <div
      sx={{
        height: "100%",
        width: "100%",
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
          WE MAKE <br></br>DELICIOUS CAKES
        </h1>
      </Container>
    </div>
  </BackgroundImage>
  )
}

export default Background