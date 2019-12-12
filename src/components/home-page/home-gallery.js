/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Grid, Card } from '@theme-ui/components'
import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Container from "../container"
import Button from "../button"

const HomeGallery = ({ images = [] }) => {
  
  const processedImages = React.useMemo(() => {
    return images.map(({ image }) => ({
      ...image,
    }))
  }, [images])

  return (
    <>
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
          }}>Checkout a selection of some of our cakes below.</p>
          </div>

      <Grid  gap={[3]} columns={[2,3,4]}>
        {processedImages.map((image) => {
          return (
              <Card key={image.id} >
                <Img
                  key={image.id}
                  fluid={{ ...image.sharp.fluid, aspectRatio: 1 / 1 }}
                />
              </Card> 
          )
        })}
        
      </Grid>

      <Link to="/cakegallery" sx={{ textDecoration: "none" }}>
          <Button>View More</Button>
      </Link>

      </Container>

    </>
  )
}

export default HomeGallery