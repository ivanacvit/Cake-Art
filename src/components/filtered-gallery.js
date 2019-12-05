/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Card } from '@theme-ui/components'
import React, { useRef, useState, useMemo } from "react"
import matchSorter from "match-sorter"
import debounce from "debounce"
import Img from "gatsby-image"

// extract cake from the corresponding filenames
const getCake = imageBase =>
  imageBase
    .split("-")
    .slice(0, -2) //(1, -2) za prigodu
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ")

const FilteredGallery = ({ images = [], ...prop }) => {
  const [search, setSearch] = React.useState("")
  const inputRef = React.useRef()

  // processing photo cakes (extracting cake names from filenames)
  // this is a one-time job, hence useMemo hook.
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
      <div
        {...prop}
        sx={{
          display: "flex",
          paddingTop: 2,
          marginBottom: 2,
          borderBottom: `1px solid pink`,
          
        }}
      >
        <label 
          sx={{
            position: "relative",
            marginLeft: "auto",
            width: ["100%", "auto"],
          }}
        >
          <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            // autoFocus={true}
            onChange={debounce(() => setSearch(inputRef.current.value), 200)}
            sx={{
              py: 2,
              paddingLeft: 3,
              overflow: "hidden",
              borderWidth: 0,
              color: "text",
              fontSize: 1,
              fontWeight: "medium",
              "&:focus": {
                outline: "none",
                backgroundColor: "white",
              },
            }}
          />
        
        </label>
      </div>

      <Grid gap={[4]} columns={[2, 3, 4]}>
        {filteredImages.map((image, index) => {
          return (
            image.cake && (
              <Card key={image.id}>
                <Img
                  key={image.id}
                  fluid={{ ...image.sharp.fluid, aspectRatio: 1 / 1 }}
                />
              </Card>
            )
          )
        })}
        
      </Grid>

    </>
  )
}

export default FilteredGallery