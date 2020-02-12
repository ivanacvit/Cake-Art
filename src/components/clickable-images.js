/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Card } from "@theme-ui/components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "../../styles/image-hover.css"

const ClickableImage = ({ children, ...prop }) => {
  const data = useStaticQuery(graphql`
    {
      cakeImage: file(
        relativePath: {
          eq: "recipes/cake/cherry-cake1.jpg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cupcakeImage: file(
        relativePath: { eq: "recipes/cupcake/raspberry-cupcake1.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      dessertImage: file(
        relativePath: {
          eq: "recipes/dessert/oreo-dessert1.jpg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cookieImage: file(
        relativePath: {
          eq: "recipes/cookie/raspberrymacarons-cookie1.jpg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      puddingImage: file(
        relativePath: {
          eq: "recipes/pudding/banana-pudding1.jpg"
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

  const { cakeImage, cupcakeImage, dessertImage, cookieImage, puddingImage } = data

  return (
    <>
      <div
        sx={{
          width: "100%",
          maxWidth: "container",
          margin: "0 auto",
          px: [0],
          paddingBottom:"50px"
        }}
      >
        <div {...prop}>{children}</div>

        <Grid gap={[3, 4, 4]} columns={[2, 3, 3]}>
          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={{...cakeImage.sharp.fluid, aspectRatio: 1/1}}
              ></Img>
              <div className="overlay">
                <Link to="cake" className="info">
                  Cakes
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={{...cupcakeImage.sharp.fluid, aspectRatio: 1/1}}
              ></Img>
              <div className="overlay">
                <Link to="cupcake" className="info">
                  CupCakes
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={{...dessertImage.sharp.fluid, aspectRatio: 1/1}}
              ></Img>
              <div className="overlay">
                <Link to="dessert" className="info">
                  Desserts
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={{...cookieImage.sharp.fluid, aspectRatio: 1/1}}
              ></Img>
              <div className="overlay">
                <Link to="cookie" className="info">
                  Cookies
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={{...puddingImage.sharp.fluid, aspectRatio: 1/1}}
              ></Img>
              <div className="overlay">
                <Link to="pudding" className="info">
                  Puddings&Pies
                </Link>
              </div>
            </div>
          </Card>
        </Grid>
      </div>
    </>
  )
}

export default ClickableImage
//gap pomiče navigaciju
