/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid } from "@theme-ui/components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import GoogleMap from "../components/google-map"

const Location = () => {
  return (
    <Layout>
      <Container>
        <h2>LOCATION</h2>

        <Grid gap={[2, 1]} columns={[1, 2, 2]} sx={{ margin: [1,4] }}>
          <div
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              pb:[3],
              "@media (max-width: 700px)": {
                marginLeft: "0",
                marginRight: "0",
              },
            }}
          >
            <div>
              <p
                sx={{
                  fontSize: [2],
                  fontWeight: "semibold",
                  color: "grey",
                }}
              >
                ADDRESS
              </p>

              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                }}
              >
                Sinj <br />
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
                }}
              >
                CONTACT
              </p>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
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
                }}
              >
                HOURS
              </p>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                }}
              >
                Mon-Sat 10am-7pm <br />
                Sun 11am-5pm
              </p>
            </div>

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
                Order Online
              </button>
            </Link>
          </div>

          <div
            sx={{
              py: [4],
              marginLeft: "auto",
              marginRight: "auto",
              "@media (max-width: 400px)": {
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
