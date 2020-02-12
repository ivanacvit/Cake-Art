/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import styles from "../../styles/inputform.module.css"

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      surname:"",
      username:"",
      email: "",
      password: "",
      
    }
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value })
  }
  handleSurnameChange = evt => {
    this.setState({ surname: evt.target.value })
  }
  handleUsernameChange = evt => {
    this.setState({ username: evt.target.value })
  }
  handleEmailChange = evt => {
    this.setState({ email: evt.target.value })
  }
  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value })
  }

  handleSubmit = () => {
    const { name } = this.state
    
    alert(`Welcome ${name}`);

  }

  

  render() {
    const { name, surname, username, email, password } = this.state
    const enabled = name.length > 0 && surname.length > 0 && username.length > 0 && email.length > 0 && password.length > 0  
    
    return (
      <>
        <Layout>
          <Container sx={{ py: [4, 5] }}>
            <form className={styles.LoginForm}
                  onSubmit={this.handleSubmit}>

              <p className={styles.Text}>Enter your data:</p>

              <input
                autoFocus
                type="text"
                className={styles.LoginForm__input}
                placeholder="Name"
                autoComplete="off"
                value={this.state.name}
                onChange={this.handleNameChange}
              />

              <input
                type="text"
                className={styles.LoginForm__input}
                placeholder="Surname"
                autoComplete="off"
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />

              <input
                type="text"
                className={styles.LoginForm__input}
                placeholder="Username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />

              <input
                type="text"
                className={styles.LoginForm__input}
                placeholder="Email address"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <input
                type="password"
                className={styles.LoginForm__input}
                placeholder="Password"
                autoComplete="off"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />


              <input
                type="submit"
                className={styles.LoginForm__button}
                value={"Create an account"}
                disabled={!enabled}
                
              ></input>

              <label />
            </form>
          </Container>
        </Layout>
      </>
    )
  }
}
export default Register
