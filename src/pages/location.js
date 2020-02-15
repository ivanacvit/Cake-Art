/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import { Grid } from "@theme-ui/components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import GoogleMap from "../components/google-map"
import { isLoggedIn } from "../../services/authentication"
import PopUp from "../components/popup"
import Pdf from "../../menu.pdf"

const Location = () => {
  const ref = React.createRef();
  return (
    <Layout>
      <Container>
        <Grid gap={[2, 1]} columns={[1, 1, 2, 2]} sx={{ margin: [1, 5] }}>
          <div
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              pb: [3],
              "@media (max-width: 200px)": {
                marginLeft: "0",
                marginRight: "0",
              },
            }}
          >
            <div>
              <h1
                sx={{
                  fontSize: [2],
                  fontWeight: "semibold",
                  color: "grey",
                  pb: [0],
                  mb: [0],
                }}
              >
                ADDRESS
              </h1>

              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                  p: [0],
                  m: [0],
                }}
              >
                Vlahe Bukovca 28 <br />
                21230, Sinj
              </p>
            </div>

            <div>
              <p
                sx={{
                  fontSize: [2],
                  fontWeight: "semibold",
                  color: "grey",
                  pb: [0],
                  mb: [0],
                }}
              >
                CONTACT
              </p>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                  p: [0],
                  m: [0],
                }}
              >
                email: cakeart@cakeart.com <br />
                telephone: 091 234 56 78
              </p>
            </div>

            <div>
              <p
                sx={{
                  fontSize: [2],
                  fontWeight: "semibold",
                  color: "grey",
                  pb: [0],
                  mb: [0],
                }}
              >
                HOURS
              </p>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                  p: [0],
                  m: [0],
                }}
              >
                Mon-Sat 10am-7pm <br />
                Sun 11am-5pm
              </p>
            </div>

            {isLoggedIn() ? (
              <Link to="/order" sx={{ 
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyItems: "stretch",
                maxWidth: "400px",
                margin: "0 auto",}}>
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
                    marginTop: [4],
                    marginBottom: "0px",
                    "&:hover": {
                      boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                    },

                    "@media (max-width: 700px)": {
                      padding: "8px 20px",
                      marginTop: "20px",
                    },
                  }}
                >
                  Submit a custom order inquiry
                </button>
              </Link>

            ) : (
              
              <PopUp />
            )}
            <a href={Pdf} sx={{ 
                              textDecoration: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyItems: "stretch",
                              maxWidth: "400px",
                              margin: "0 auto",}}>
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
                    marginTop: [4],
                    marginBottom: "0px",
                    "&:hover": {
                      boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                    },

                    "@media (max-width: 700px)": {
                      padding: "8px 20px",
                      marginTop: "20px",
                    },
                  }}
                >
                  Menu&Prices
                </button>
              </a>
            
          </div>


          <div
            sx={{
              margin: "auto",
              py: [4],

              "@media (max-width: 200px)": {
                display: "none",
              },
            }}
          >
            <GoogleMap />
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Location
