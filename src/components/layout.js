/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { css, jsx, Main } from "theme-ui"

import Navigation from "../components/navigation"
import Container from "../components/container"
import Footer from "../components/footer"
import { getUser, isLoggedIn } from "../../services/authentication"

const SiteContainer = props => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      margin: "0 auto",
    }}
  />
)

const Layout = ({ children }) => {
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
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } 

  return (
    <>
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: `text`,
            backgroundColor: `background`,
            fontFamily: `body`,
            lineHeight: `body`,
            fontWeight: `body`,
          },
        })}
      />
      <SiteContainer>
        <Navigation menuItems={data.site.siteMetadata.menuItems} 
          
        />
         <Container>
          <span sx ={{color: "grey", letterSpacing:"tight"}}>{content.message}</span>
        </Container>

        <Main>
          {children}
        </Main>

        <Footer />
      </SiteContainer>
    </>
  )
}

export default Layout

