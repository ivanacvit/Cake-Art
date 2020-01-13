/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const NotFoundPage = () => {
  return(
  <Layout>
    <Container>
    <SEO title="404: Not found" />
    <h2>NOT FOUND</h2>
    <p  sx={{
            color:"grey",
            letterSpacing: "tight",
          }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)}

export default NotFoundPage
