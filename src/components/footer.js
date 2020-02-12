/** @jsx jsx */
import { jsx, Footer as ThemeFooter } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Grid, Card } from "@theme-ui/components"

import Container from "./container"
import { GitHub, Gatsby } from "./icons"
import ContactUs from "../components/contact-us"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            text
            path
          }
        }
      }
    }
  `)
  const currentYear = new Date().getFullYear()

  return (
    <ThemeFooter
      sx={{
        bg: "grey",
        mt: 4,
        pt: [2, 2, 3],
        pb: 2,
        color: "white",
      }}
    >
      <div
        sx={{
          width: "100%",
          margin: "0 auto",
          px: [3],
        }}
      >
        <Grid gap={[3]} columns={[1, 2, 3]}>
          <div
            sx={{
              my: 5,
              mx: "auto",
            }}
          >
            <Grid gap={[2]} columns={[1]}>
              {data.site.siteMetadata.menuItems.map(menuItem => (
                <Link
                  key={menuItem.path}
                  to={menuItem.path}
                  sx={{
                    color: "white",
                    fontWeight: "semibold",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    letterSpacing: "tight",
                    transition: "all 0.25s linear",

                    "&:hover": {
                      color: "#F78DA7",
                    },
                  }}
                >
                  {menuItem.text}
                </Link>
              ))}
            </Grid>
          </div>

          <ContactUs />

          <div sx={{ m: "auto", mb: 4,
        }}>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div sx={{ display: "flex" }}>
                <GitHub />
                <div sx={{ mx: 2 }} />
                <Gatsby />
              </div>
            </div>
            <p sx={{ mt: 2 }}> Ivana Cvitković © {currentYear} FESB</p>
          </div>
        </Grid>
      </div>
    </ThemeFooter>
  )
}

export default Footer
