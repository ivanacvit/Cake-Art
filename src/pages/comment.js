/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import Comments from "../components/comments/CommentList"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/authentication"
import styles from "../../styles/private.module.css"
import CommentMessage from "../components/comments/comment-message"

const Comment = () => {
  return (
    <>
      <Layout>
        <Container>
          <h2>COMMENT</h2>
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
