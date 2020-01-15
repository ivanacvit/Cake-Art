/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"
import { navigate, Link } from "gatsby"

import Container from "../container"
import styles from "../../../styles/login.module.css"

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "Enter your username and password",
    invalid: false,
  }

  handleUsername = event => this.setState({ username: event.target.value })
  handlePassword = event => this.setState({ password: event.target.value })
  handleSubmit = event => {
    event.preventDefault()

    const status = this.props.handleLogin(this.state)

    let { message, invalid } = this.state
    if (status.error) {
      message = status.message
      invalid = true
      return this.setState({ username: "", password: "", message, invalid })
    }

    navigate(this.props.private)
  }

  render() {
    const style = this.state.invalid
      ? { color: "var(--color-red, red)" }
      : { color: "var(green)" }

    return (
      <>
        <Container>
          <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
            <p className={styles.Text} style={style}>
              {this.state.message}
            </p>

            <input
              autoFocus
              type="text"
              className={styles.LoginForm__input}
              placeholder="Username"
              onChange={this.handleUsername}
              value={this.state.username}
            />

            <input
              type="password"
              className={styles.LoginForm__input}
              placeholder="Password"
              onChange={this.handlePassword}
              value={this.state.password}
            />

            <input
              type="submit"
              value={"Log in"}
              sx={{
                backgroundColor: "#FFA5BB",
                outline: "0",
                color: "white",
                border: "1px solid",
                borderRadius: "3px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "inherit",
                padding: "12px",
                marginTop: "0.5rem",
                  "&:hover": {
                    boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                  }
              }}
            />
            <label>
              <p className={styles.Text}>or create an account here </p>
            </label>
            <Link to="/register" className={styles.LoginForm__button}>
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
                Create an account
              </button>
            </Link>
          </form>
        </Container>
      </>
    )
  }
}

export default Login
