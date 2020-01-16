/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import Comments from "../components/comments/CommentList"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/authentication"
import styles from "../../styles/private.module.css"

const Comment = () => {
  return (
    <Layout>
      {isLoggedIn() ? (
        <Container>
          <h2>COMMENTS</h2>
          <div
            sx={{
              paddingTop: [0],
              textAlign: "unset"
            }}
          >
          <Comments />
          </div>
        </Container>
      ) : (
        <Container>
          <div
            sx={{
              paddingTop: [5],
              textAlign: "center",
            }}
          >
            <p
              sx={{
                color: "grey",
                letterSpacing: "tight",
                paddingBottom: "20px",
              }}
            >
              If you want give us a comment, please click here:
            </p>
            <Link
              to="/"
              onClick={event => {
                event.preventDefault()

                navigate("/private")
              }}
              className={styles.Logout}
            >
              Login
            </Link>
          </div>
        </Container>
      )}
    </Layout>
  )
}

export default Comment
