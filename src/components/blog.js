/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Grid, Card } from "@theme-ui/components"

import Container from "./container"

const Blog = props => {
  return (
  
      <section
        sx={{
          mb: [4, 5],
          display: "flex",
        }}
      >
        <div
          sx={{
            width: "150px",
            height: "150px",
       
          }}
        >
          <Img fluid={props.image}/>
        </div>

        <div sx={{
             maxWidth: "736px",
             float: "right"
           
          }}>
        <Link
          sx={{
            textDecoration: "none",
            color: "grey",
            textTransform: "uppercase",
            fontWeight: "semibold",
            lineHeight: "navLink",
            whiteSpace: "nowrap",
            letterSpacing: "tight",
            transition: "all 0.25s linear",
            "&:hover": {
              color: "#F78DA7",
              cursor: "pointer",
            },
          }}
          activeStyle={{
            color: "#F78DA7",
          }}
          to={props.to}
        >
            {props.title}
        </Link>

        <p
          sx={{
            color: "black",
         
          }}
        >
          {props.excerpt}
        </p>
        </div>
      </section>
  )
}

export default Blog
