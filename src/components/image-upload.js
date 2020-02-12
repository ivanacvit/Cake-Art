/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Grid } from "@theme-ui/components"

import "../../styles/image-upload.css"

function ImageUpload() {
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "cake-art")
    setLoading(true)
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/ds8rsfydx/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="app">
      <Grid gap={[3]} columns={[1]}>
        <label
          className="custom-file-upload"
          sx={{
            "&:hover": {
              boxShadow: "0 0 5px rgba(0,0,0,0.24)",
            },
          }}
        >
          <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
            className="input"
          />
          Choose Image
        </label>
        {loading ? <h3>Loading...</h3> : <img src={image} className="image" />}
      </Grid>
    </div>
  )
}

export default ImageUpload
