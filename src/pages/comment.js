/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import Comments from "../components/comments/CommentList"
import { getUser, isLoggedIn, logout } from "../../services/authentication"
import CommentMessage from "../components/comments/comment-message"

const Comment = () => {
  return (
    <>
      <Layout>
        <Container  sx={{pt:[4,5]}}>
        
      {isLoggedIn() ? (
            <Comments />
          ) : (
            <>
              <CommentMessage />
            </>
          )} 
          
         
        </Container>
      </Layout>
    </>
  )
}

export default Comment
