/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import ServicesImages from "../components/services-images"

const Blog = () => {
  return (
    <Layout>
      <Container>
        <h2>OUR SERVICES</h2>

        <ServicesImages sx={{ margin: [4,5] }}> </ServicesImages>
      </Container>
    </Layout>
  )
}

export default Blog