/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from "../components/container"

export default ({ data }) => {
   const post = data.markdownRemark

   return (
      <Layout>
         <Container >
            <h1 text={post.frontmatter.title}></h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
      </Layout>
   )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`