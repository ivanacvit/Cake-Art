/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { Grid, Card } from '@theme-ui/components'

import Container from "../components/container"
import Layout from "../components/layout"
import Blog from "../components/blog"
import SearchIcon from "../components/search-icon"

const Pudding = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log("Target value: ", event.target.value)
    const query = event.target.value

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { title } = post.node.frontmatter

      return (
       
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
  return (
    <>
      <Layout>
        <Container>
          <h2>Puddings&Pies</h2>

          <div
            sx={{
              display: "flex",
              paddingTop: 2,
              marginBottom: 2,
              borderBottom: `1px solid pink`,
            }}
          >
            <label
              sx={{
                position: "relative",
                marginLeft: "auto",
                width: ["100%", "auto"],
              }}
            >
              <input
                type="text"
                placeholder="Search pudding or pie"
                onChange={handleInputChange}
                sx={{
                  py: 2,
                  paddingLeft: 4,
                  overflow: "hidden",
                  borderWidth: 0,
                  color: "text",
                  fontSize: 1,
                  fontWeight: "medium",
                  "&:focus": {
                    outline: "none",
                    backgroundColor: "#FFEFF3",
                  },
                }}
              />
              <SearchIcon
                sx={{
                  fill: "grey",
                  position: "absolute",
                  left: "5px",
                  top: "50%",
                  width: 4,
                  height: 4,
                  pointerEvents: "none",
                  transform: "translateY(-50%)",
                }}
              />
            </label>
          </div>
          <div>
          <Grid gap={[4]} columns={[2]} sx = {{pt:3}}>
            {posts.map(({ node }) => (
              <Card>
              <Blog
                id={node.id}
                to={node.fields.slug}
                image={node.frontmatter.image.childImageSharp.fluid}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                keywords={node.frontmatter.keywords}
                excerpt={node.excerpt}
              />
              </Card>
            ))}
            
            </Grid>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Pudding

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//markdown/pudding//" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date
            title
            keywords
            image {
              childImageSharp {
                fluid(maxHeight: 150, maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt (pruneLength: 280)
        }
      }
    }
  }
`
