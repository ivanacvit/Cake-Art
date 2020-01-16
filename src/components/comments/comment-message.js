/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, navigate } from "gatsby"

import styles from "../../../styles/private.module.css"

const CommentMessage = () => {
  return (
    <>
      <div sx={{ paddingTop: [4], textAlign: "center" }}>
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
      
    </>
  )
}

export default CommentMessage
