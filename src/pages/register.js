import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import styles from "../../styles/login.module.css"

export default () => (
  <>
    <Layout>
      <Container>
        <h2>REGISTER</h2>
        <form className={styles.LoginForm}>
          <p className={styles.Text}>Enter your data:</p>

          <input
            autoFocus
            type="text"
            className={styles.LoginForm__input}
            placeholder="Name"
          />

          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Surname"
          />

          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Username"
          />

          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Email address"
          />
          <input
            type="password"
            className={styles.LoginForm__input}
            placeholder="Password"
          />
          <input
            type="password"
            className={styles.LoginForm__input}
            placeholder="Enter your password again"
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
