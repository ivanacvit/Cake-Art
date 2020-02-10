/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import styles from "../../styles/inputform.module.css"

export default () => (
  <>
    <Layout>
      <Container  sx={{py:[4,5]}}>
       
        <form className={styles.LoginForm}>
          <p className={styles.Text}>Enter your data:</p>

          <input
            autoFocus
            type="text"
            className={styles.LoginForm__input}
            placeholder="Name"
            autoComplete="off"
          />

          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Surname"
            autoComplete="off"
          />

          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Username"
            autoComplete="off"
          />

          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Email address"
            autoComplete="off"
          />
          <input
            type="password"
            className={styles.LoginForm__input}
            placeholder="Password"
            autoComplete="off"
          />
          <input
            type="password"
            className={styles.LoginForm__input}
            placeholder="Enter your password again"
            autoComplete="off"
          />
         
            <input
              type="submit"
              className={styles.LoginForm__button}
              value={"Create an account"}
              onClick={() => {
                alert("You sucessfuly registred.")
              }}
            ></input>
       
          <label />
        </form>
      </Container>
    </Layout>
  </>
)
