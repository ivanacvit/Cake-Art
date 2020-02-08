/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid } from "@theme-ui/components"
import { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import { Link } from "gatsby"

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
    const getCake = imageBase =>
      imageBase
        .split("-")
        .slice(0, -1)
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ")

    const { images } = this.props
    const { selectedImage, showLightbox } = this.state

    return (
      <Fragment>
        <Grid
          gap={[4]}
          columns={[2, 3, 4]}
          sx={{ pt: 3 }}
          sx={{ outline: "0" }}
          sx={{ paddingBottom: "50px" }}
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
            aria-labelledby="dialogId"
            sx={{
              width: "45%",
              backgroundColor: "#E6E6E6",

              "@media (max-width: 1050px)": {
                width: "70%",
                
              },
            }}
          >
            <button
              sx={{
                outline: "0",
                textDecoration: "none",
                background: "#F78DA7",
                border: "1px solid #F78DA7",
                color: "white",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "inherit",
                marginLeft: "auto",
                display: "block",
                marginBottom: "20px",
                "&:hover": {
                  boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                },
              }}
              onClick={() => this.setState({ showLightbox: false })}
            >
              X
            </button>
            <Grid gap={[1,1,4]} columns={[1,1,2]}>
              <Img
                fluid={{
                  ...selectedImage.node.childImageSharp.fluid,
                  aspectRatio: 1 / 1,
                }}
                sx={{
                  "@media (max-width: 700px)": {
                    display: "none",
                    
                  }
                }}
              />
              <div>
                <p
                  sx={{
                    color: "grey",
                    letterSpacing: "tight",
                    m: 0,
                    pb: [3],
                    fontSize: [1, 1, 2],
                    fontWeight: "medium",
                  }}
                >
                  {getCake(selectedImage.node.base)}
                </p>
                <p
                  sx={{
                    color: "black",
                    letterSpacing: "tight",
                    m: 0,
                    pb: [4],
                  }}
                >
                  What's better than a smooth white wedding cake? One covered in sparkly sanding sugar!
                </p>

                <Link to="/location" sx={{ textDecoration: "none" }}>
            <button
              button
              sx={{
                outline: "0",
                color: "#F78DA7",
                border: "1px solid #F78DA7",
                background: "white",
                padding: "12px 38px",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "inherit",
                display: "block",
                marginTop: "20px",
                marginBottom: "0px",
                "&:hover": {
                  boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                },

                "@media (max-width: 700px)": {
                  padding: "8px 20px",
                  marginTop: "5px",
                },
              }}
            >
              Contact Us
            </button>
          </Link>
              </div>
            </Grid>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
