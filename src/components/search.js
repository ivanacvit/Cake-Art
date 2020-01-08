/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//src/markdown/birthday//" } }
      ) {
        edges {
          node {
            frontmatter {
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
            excerpt
          }
        }
      }
    }
  `)

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
      const { keywords, title } = post.node.frontmatter
      console.log(
        "Title:",
        title,
        title.toLowerCase(),
        title.toLowerCase().includes(query.toLowerCase())
      )
      console.log(
        "Keywords:",
        keywords,
        keywords.toLowerCase(),
        keywords.toLowerCase().includes(query.toLowerCase())
      )
      return (
        keywords.toLowerCase().includes(query.toLowerCase()) ||
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
          placeholder="Search"
          onChange={handleInputChange}
          sx={{
            py: 2,
            paddingLeft: 3,
            overflow: "hidden",
            borderWidth: 0,
            color: "text",
            fontSize: 1,
            fontWeight: "medium",
            "&:focus": {
              outline: "none",
              backgroundColor: "white",
            },
          }}
        />
         </label>
      </div>

      {posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { title } = node.frontmatter
        return (
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              />
            </section>
            <hr />
          </article>
        )
      })}
    </>
  )
}

export default BlogIndex
