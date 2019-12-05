/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Grid, Card } from '@theme-ui/components'
import React from "react"
import matchSorter from "match-sorter"
import Img from "gatsby-image"

const getCake = imageBase =>
  imageBase
    .split("-")
    .slice(1, -1)
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ")

const HomeService = ({ images = []}) => {
  const { theme } = useThemeUI()
  const [search] = React.useState("")

  const processedImages = React.useMemo(() => {
    return images.map(({ image }) => ({
      ...image,
      cake: getCake(image.base),
    }))
  }, [images])

  const filteredImages = matchSorter(processedImages, search, {
    keys: [
      "cake",
      { key: "cake", threshold: matchSorter.rankings.CONTAINS },
    ],
  })

  return (
    <>
      <Grid gap={[2,4,5,6]} columns={[2,3,3]}>
        {filteredImages.map((image) => {
          return (
            image.cake && (
              <Card key={image.id} sx={{boxShadow: theme => `0 0 8px ${theme.colors.muted}`}}>
                <Img
                  key={image.id}
                  fluid={{ ...image.sharp.fluid, aspectRatio: 1 / 1 }}
                  
                />
                <p sx={{ mt: 1, mb: 0, }}>
                  {" "}
                  <span sx={{ letterSpacing: "tight", fontWeight: "medium", color: "#F78DA7" }}>
                    {image.cake}
                  </span>
                </p>
              </Card>
              
            )
          )
        })}
        
      </Grid>

    </>
  )
}

export default HomeService