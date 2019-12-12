/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"

import Container from "../components/container"
import Layout from "../components/layout"
import Blog from "../components/blog"

const BirthdayCake = ({data}) =>{
  return(
  <Layout>
    <Container>
      
    <h2 sx={{marginBottom:[2,5]}}>BLOG&RECIPES</h2> 
    
    <div>
    {data.allMarkdownRemark.edges.map(({node}) =>(
    <Blog id={node.id}
      to={node.fields.slug}
      image={node.frontmatter.image.childImageSharp.fluid}
      title={node.frontmatter.title}
      excerpt={node.excerpt} />
    ))}
  </div>
       
    </Container>
  </Layout>
)}

export default BirthdayCake

export const query = graphql`
  query{
    allMarkdownRemark( filter: {fileAbsolutePath:{regex: "//markdown/specialOccasion//"}}) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              keywords
              image {
                childImageSharp {
                  fluid(
                    maxHeight: 150, 
                    maxWidth: 150)
                    {
                      ...GatsbyImageSharpFluid
                    }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
  }

`