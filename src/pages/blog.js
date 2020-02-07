/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import ClickableImages from "../components/clickable-images"

const Blog = () => {
  return (
    <Layout>
      <Container>
        <h2>BLOG&RECIPES</h2>
        <div
          sx={{
            textAlign: "center",
            margin: [2, 5],
          }}
        >
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
            }}
          >
            When the sweet tooth comes a-knockin', dish up one these luscious
            dessert ... pie, or cake that strikes your fancy, our delicious
            dessert recipes are sure to please.
          </p>
        </div>
        <ClickableImages sx={{ margin: [2, 5] }}> </ClickableImages>
      </Container>
    </Layout>
  )
}

export default Blog
