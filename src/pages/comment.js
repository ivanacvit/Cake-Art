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
          <div className={styles.loginDiv}
          sx={{ paddingTop: "0rem"}}>
          <Comments />
          </div>
        </Container>
      ) : (
        <Container>
          <div className={styles.logoutDiv}
          sx={{ paddingTop: "4rem"}}>
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
