/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Blog = props => {
  return (
    <>
      <div
        key={props.id}
        sx={{
          mb: [2],
          display: "flex",
        }}
      >
        <div
          sx={{
            pt:[3],
            width: "150px",
            "@media (max-width: 600px)": {
              width: "0px",
          
            },
            
              
          }}
        >
          <Link to={props.to}>
            <Img
              fluid={{...props.image, aspectRatio: 1/1}}
             sx={{
               width: "150px",
               "@media (max-width: 600px)": {
                display: "none",
            
              },
             }}
            />
          </Link>
        </div>

        <div
          sx={{
            float: "right",
            pl: [3],
            "@media (max-width: 600px)": {
              pl: [0],
            },
          }}
        >
          <Styled.h4 sx={{ mt: 0 }}>
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
                "@media (max-width: 600px)": {
                  color: "#F78DA7",
              
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

          <span sx={{ fontWeight: "body", 
          fontSize: 1, color: "gray.5",}}>
            {props.date}
            
          </span>

          <Styled.p
            sx={{
              m: 0,
              color: "black",
            }}
          >
            {props.keywords}
          </Styled.p>
        </div>
      </div>
    </>
  )
}

export default Blog
