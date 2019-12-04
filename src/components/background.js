/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"

import BackgroundImage from "gatsby-background-image"
import Container from "../components/container"

const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true
  };
  
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
      height: [150, 250, 250],
       
    }}
  >
    <div
      sx={{
        height: "100%",
      }}
    >
      <Container>
        <h1
          sx={{
            m: 0,
            pt: [3, 4],
            fontSize: [5, 6, 7],
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