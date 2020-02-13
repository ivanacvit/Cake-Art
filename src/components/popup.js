/** @jsx jsx */
import { jsx } from "theme-ui"
import { Component, Fragment } from "react"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import { Link } from "gatsby"

import "../../styles/image-hover.css"

export default class PopUp extends Component{
  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
    }
  }

  render() {
    const { showLightbox } = this.state

    return (
      <Fragment>
        <button
             
             sx={{
               outline: "0",
               color: "white",
               border: "1px solid white",
               background: "#F78DA7",
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
                 marginTop: "20px",
               },
             }}
             onClick={() => this.setState({ showLightbox: true })}
           >
             Submit A Custom Order Inquiry
           </button>
       

        {showLightbox && (
          <Dialog
            aria-labelledby="dialogId"
            sx={{
              width: "25%",
              backgroundColor: "#E6E6E6",

              "@media (max-width: 1100px)": {
                width: "60%",
              },
             
             
            }}
          >
            <button
              sx={{
                outline: "0",
                textDecoration: "none",
                backgroundColor: "#E6E6E6",
                border: "none",
                color: "grey",
                cursor: "pointer",
                fontSize: [2, 3],
                marginLeft: "auto",
                display: "block",
               
                "&:hover": {
                  color: "#F78DA7",
                },
              }}
              onClick={() => this.setState({ showLightbox: false })}
            >
              X
            </button>

            <div sx={{textAlign:"center"}}>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                  m: 0,
                  pb: [2],
                  fontSize: [1],
                }}
              >
                Please, login first.
              </p>

              <Link to="/private" sx={{ textDecoration: "none" }}>
                <button
                 
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
                    mx:"auto",
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
                  Login
                </button>
              </Link>
            </div>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
