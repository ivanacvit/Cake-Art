/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Blog = props => {
  return (
    <>
      <section
        key={props.id}
        sx={{
          mb: [4, 5],
          display: "flex",
        }}
      >
        <div
          sx={{
            float: "right",
          }}
        >
          <Styled.h4 sx={{ mt: 0}}>
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
          </Styled.h4>

          <span sx={{ fontWeight: "body", fontSize: 1, color: "gray.5" }}>
            {props.date}
          </span>

          <Styled.p
            sx={{
              m: 0,
              color: "black",
            }}
          >
            {props.excerpt}
          </Styled.p>
        </div>
      </section>
    </>
  )
}

export default Blog
