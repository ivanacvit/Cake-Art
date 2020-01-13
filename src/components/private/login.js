import React, { Component } from "react";
import { navigate, Link } from "gatsby";

import Container from "../container"
import Button from "../button"
import styles from "../../../styles/login.module.css"

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "Enter your username and password",
    invalid: false
  };

  handleUsername = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleSubmit = event => {
    event.preventDefault();

    const status = this.props.handleLogin(this.state);

    let { message, invalid } = this.state;
    if (status.error) {
      message = status.message;
      invalid = true;
      return this.setState({ username: "", password: "", message, invalid });
    }

    navigate(this.props.private);
  };

  render() {
    const style = this.state.invalid
      ? { color: "var(--color-red, red)" }
      : { color: "var(green)" };

    return (
      <>
      <Container>
        
      <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
        <p className={styles.Text} style={style}>{this.state.message}</p>
        
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
          className={styles.LoginForm__button}
          value={"Log in"}
        />
        <label>
        <p className={styles.Text}>Or register here{" "} </p>
        <Link to="/register">
          <Button sx={{ textDecorationColor: "white" }}>Register</Button>
      </Link>
         
        </label>
      </form>
      </Container>
      </>
    );
  }
}

export default Login;