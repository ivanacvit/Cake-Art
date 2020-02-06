/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Card } from "@theme-ui/components"
import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

import "../../styles/image-hover.css"

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

export default class Lightbox extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const { images } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <Grid
          gap={[4]}
          columns={[2, 3, 4]}
          sx={{ pt: 3 }}
          sx={{ outline: "0" }}
          sx={{paddingBottom: "50px"}}
        >
          {images.map(image => (
            <PreviewButton
              sx={{
                outline: "0",
              }}
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <div className="hovereffect">
                <Img
                  className="img-responsive"
                  fluid={{
                    ...image.node.childImageSharp.fluid,
                    aspectRatio: 1 / 1,
                  }}
                />
              </div>
            </PreviewButton>
          ))}
        </Grid>
        {showLightbox && (
          <Dialog
            sx={{
              width: "35%",
            }}
          >
            <Img
              fluid={{
                ...selectedImage.node.childImageSharp.fluid,
                aspectRatio: 1 / 1,
              }}
            />
            
            <button
              sx={{
                outline: "0",
                color: "#F78DA7",
                border: "1px solid #F78DA7",
                background: "transparent",
                padding: "12px 28px",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "inherit",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                marginTop: "20px",
                marginBottom: "0px",
              }}
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
