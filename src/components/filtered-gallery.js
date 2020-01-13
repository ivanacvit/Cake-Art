/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Card } from '@theme-ui/components'
import React, { useRef, useState, useMemo } from "react"
import matchSorter from "match-sorter"
import debounce from "debounce"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../../styles/image-hover.css"
import SearchIcon from "./search-icon"

// extract cake from the corresponding filenames
const getCake = imageBase =>
  imageBase
    .split("-")
    .slice(0, -2)
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ")

const FilteredGallery = ({ images = [] }) => {
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
            placeholder="Search cake"
            ref={inputRef}
            // autoFocus={true}
            onChange={debounce(() => setSearch(inputRef.current.value), 200)}
            sx={{
              py: 2,
              paddingLeft: 4,
              overflow: "hidden",
              borderWidth: 0,
              color: "text",
              fontSize: 1,
              fontWeight: "medium",
              "&:focus": {
                outline: "none",
                backgroundColor: "#FFEFF3",
              },
            }}
          />
          <SearchIcon
            sx={{
              fill: "grey",
              position: "absolute",
              left: "5px",
              top: "50%",
              width: 4,
              height: 4,
              pointerEvents: "none",
              transform: "translateY(-50%)",
            }}
          />
        
        </label>
      </div>

      <Grid gap={[4]} columns={[2, 3, 4]} sx = {{pt:3}}>
        {filteredImages.map((image, index) => {
          return (
            image.cake && (
              <Card key={image.id}>
                <div className="hovereffect">
                <Img
                className="img-responsive"
                  key={image.id}
                  fluid={{ ...image.sharp.fluid, aspectRatio: 1 / 1 }}
                />
                </div>
              </Card>
            )
          )
        })}
        
      </Grid>

    </>
  )
}

export default FilteredGallery