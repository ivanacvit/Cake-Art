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
   <>
      {isLoggedIn() ? (
        <Layout>
        <Container>
          <h2>COMMENTS</h2>
         
          <Comments />
         
        </Container>
        </Layout>
      ) : (
        <Layout>
        <Container>
          <div
          sx={{ paddingTop: [5], textAlign: "center"}}>
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
               <button
                sx={{
                  backgroundColor: "white",
                  color: "#F78DA7",
                  border: "white",
                  cursor: "pointer",
                  fontSize: "inherit",
                  outline: "0",
                }}
              >
                 Login
              </button>
             
            </Link>
          </div>
        </Container>
        </Layout>
      )}
    </>
  )
}

export default Comment
