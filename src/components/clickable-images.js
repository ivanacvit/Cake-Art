/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Card } from "@theme-ui/components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "../../styles/image-hover.css"
import Container from "../components/container"

const ClickableImage = ({ children, ...prop }) => {
  const data = useStaticQuery(graphql`
    {
      birthdayImage: file(
        relativePath: {
          eq: "images/birthday/unicornCake-birthday-cake-18.jpeg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      weddingImage: file(
        relativePath: { eq: "images/wedding/weddingCake-wedding-cake-03.jpeg" }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      specialImage: file(
        relativePath: {
          eq: "images/special-occasion/unicornCake-specialOccasion-cake-29.jpg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { birthdayImage, specialImage, weddingImage } = data

  return (
    <>
      <Container>
        <div {...prop}>{children}</div>

        <Grid gap={[3, 4, 5]} columns={[2, 3, 3]}>
          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={birthdayImage.sharp.fluid}
              ></Img>
              <div className="overlay">
                <Link to="birthday-cake" className="info">
                  Birthday Cakes
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={weddingImage.sharp.fluid}
              ></Img>
              <div className="overlay">
                <Link to="wedding-cake" className="info">
                  Wedding Cakes
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={specialImage.sharp.fluid}
              ></Img>
              <div className="overlay">
                <Link to="special-occasion" className="info">
                  Special Occasion
                </Link>
              </div>
            </div>
          </Card>
        </Grid>
      </Container>
    </>
  )
}

export default ClickableImage
//gap pomiče navigaciju
