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
        <div
          sx={{
            textAlign: "center",
            margin: [4, 5],
          }}
        >
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
            }}
          >
            Whether it’s your big day, a birthday at the office, or just another
            Tuesday, we’ve got the perfect cakes and treats for your
            celebrations.
          </p>
        </div>
        <ServicesImages sx={{ margin: [4, 5] }}> </ServicesImages>
      </Container>
    </Layout>
  )
}

export default Blog
