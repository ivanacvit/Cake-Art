/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Card } from "@theme-ui/components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "../../styles/image-hover.css"

const ServicesImages = ({ children, ...prop }) => {
  const data = useStaticQuery(graphql`
    {
      birthdayImage: file(
        relativePath: {
          eq: "images/custom/unicorn-cake-18.jpeg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      weddingImage: file(
        relativePath: { eq: "images/wedding/flower-wedding-cake-03.jpeg" }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

        
      
    }
  `)

  const { birthdayImage, weddingImage } = data

  return (
    <>
      <div
        sx={{
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          px: [0],
          paddingBottom:"50px"
        
        }}
      >
        <div {...prop}>{children}</div>

        <Grid gap={[2, 4, 5]} columns={[2]}>
        <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={weddingImage.sharp.fluid}
              ></Img>
              <div className="overlay">
                <Link to="services-wedding" className="info">
                  Weddings
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="hovereffect">
              <Img
                className="img-responsive"
                fluid={birthdayImage.sharp.fluid}
              ></Img>
              <div className="overlay">
                <Link to="services-custom" className="info">
                  Custom
                </Link>
              </div>
            </div>
          </Card>

        

        </Grid>
      </div>
    </>
  )
}

export default ServicesImages
//gap pomiče navigaciju