/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Grid, Card } from '@theme-ui/components'
import React from "react"
import Img from "gatsby-image"

const HomeGallery = ({ images = [],...prop }) => {
  
  const processedImages = React.useMemo(() => {
    return images.map(({ image }) => ({
      ...image,
    }))
  }, [images])

  return (
    <>
      <Grid {...prop}>
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

    </>
  )
}

export default HomeGallery