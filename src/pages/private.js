/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Router } from "@reach/router"
import { navigate, Link } from "gatsby"

import { PrivateRoute } from "../components/private/private-route"
import Login from "../components/private/login"
import Layout from "../components/layout"
import Container from "../components/container"
import Comment from "./comment"
import {
  handleLogin,
  handleLogout,
  isLoggedIn,
} from "../../services/authentication"
import styles from "../../styles/private.module.css"

const Logout = () => (
  <>
  <div>
  <p>You are logged in.</p>
  <Link
    to="/"
    onClick={event => {
      event.preventDefault()
      handleLogout()
      navigate("/")
    }}
    className={styles.Logout}
  >
    Logout
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
            <h2>LOGIN</h2>

            <Login private="/comment" handleLogin={handleLogin} />
          </>
        )}

        <Router>
          <PrivateRoute
            path="/comment"
            render={Comment}
            redirect={"/private"}
          />
        </Router>
      </Container>
    </Layout>
  </>
)
