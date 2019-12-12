/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Card } from "@theme-ui/components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Container from "./container"

const ClickableImage = ({children, ...prop}) => {
  const data = useStaticQuery(graphql`
    {
      birthdayImage: file(
        relativePath: {
          eq: "images/birthday/unicornCake-birthday-cake-18.jpeg"
        }
      ) {
        sharp: childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      weddingImage: file(
        relativePath: {
          eq: "images/wedding/weddingCake-wedding-cake-03.jpeg"
        }
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
      <div {...prop}>
      {children}
      </div>
      

      <Grid gap={[3,4,5]} columns={[2, 3, 3]}> 
        <Link to="birthday-cake">
          <Card >
          <Img fluid={birthdayImage.sharp.fluid}></Img>
          <p sx={{ 
           mt: 1, 
           mb: 0, 
           fontWeight: "medium",
           letterSpacing: "tight",
           color: "grey",
           display: "inline-block",
           textDecoration: "none",
            "&:hover": {
              
              color: "#F78DA7",
            },}}>
                  Birthday Cakes
          </p>
          </Card>
        </Link>

        <Link to="wedding-cake">
          <Card 
          >
          <Img fluid={weddingImage.sharp.fluid}></Img>
          <p sx={{ 
           mt: 1, 
           mb: 0, 
           fontWeight: "medium",
           letterSpacing: "tight",
           color: "grey",
           display: "inline-block",
           textDecoration: "none",
            "&:hover": {
              
              color: "#F78DA7",
            },}}>
                  Wedding Cakes
          </p>
          </Card>
        </Link>

        <Link to="special-occasion">
          <Card >
          <Img fluid={specialImage.sharp.fluid}></Img>
          <p sx={{ 
            mt: 1, 
            mb: 0, 
            fontWeight: "medium",
            letterSpacing: "tight",
            color: "grey",
            display: "inline-block",
            textDecoration: "none",
            "&:hover": {
              color: "#F78DA7",
            },}}>
                  Special Occasions
          </p>
          </Card>
        </Link>
      </Grid>
    </>
  )
}

export default ClickableImage
 //gap pomiče navigaciju