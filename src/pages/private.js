/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { navigate, Link } from "gatsby"
import Login from "../components/private/login"
import Layout from "../components/layout"
import Container from "../components/container"


import {
  handleLogin,
  handleLogout,
  isLoggedIn,
} from "../../services/authentication"
import styles from "../../styles/private.module.css"

const Logout = () => (
  <>
    <div
      sx={{
        paddingTop: [5],
        textAlign: "center",
        py: [4, 5]
      }}
    >
      <p
        sx={{
          color: "grey",
          letterSpacing: "tight",
          padding: "0px",
          magrin: "0px"
        }}
      >
        You are logged in.
      </p>
      <p
        sx={{
          color: "grey",
          letterSpacing: "tight",
          paddingBottom: "20px",
        }}
      >
        If you want log out, please click here:
      </p>
      <Link
        to="/"
        onClick={event => {
          event.preventDefault()
          handleLogout()
          navigate("/")
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
                Logout
              </button>
        
      </Link>
    </div>
  </>
)

export default () => (
  <>
    <Layout>
      <Container>
        {isLoggedIn() ? (
          <Logout />
        ) : (
          <>
           

            <Login private="/order" handleLogin={handleLogin} />
          </>
        )}
      </Container>
    </Layout>
  </>
)
