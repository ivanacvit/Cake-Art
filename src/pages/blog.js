/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import ClickableImages from"../components/clickable-images"

const Blog = () =>{
  return(
  <Layout>
    <Container>
    <h2>BLOG&RECIPES</h2> 
    
    <ClickableImages sx={{margin:[2,5]}}> </ClickableImages> 
        
    </Container>
  </Layout>
)}

export default Blog

