/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"
import { navigate, Link } from "gatsby"

import Container from "../container"
import styles from "../../../styles/inputform.module.css"

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
      ? { color: "#9013FE" }
      : { color: "var(green)" }

    return (
      <>
        <Container sx={{ py: [4, 5] }}>
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
              autoComplete="off"
            />

            <input
              type="password"
              className={styles.LoginForm__input}
              placeholder="Password"
              onChange={this.handlePassword}
              value={this.state.password}
              autoComplete="off"
            />

            <input
              type="submit"
              value={"Log in"}
              className={styles.LoginForm__button}
            />
            <label>
              <p className={styles.Text}>or create an account here </p>
            </label>
            <Link to="/register" className={styles.RegisterForm__button}>
              <button
                sx={{
                  backgroundColor: "white",
                  color: "#FFA5BB",
                  border: "#FFA5BB",
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
