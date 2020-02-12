/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import styles from "../../styles/inputform.module.css"

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message:"",
    }
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value })
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value })
  }

  handleMessageChange = evt => {
    this.setState({ message: evt.target.value })
  }

  handleSubmit = () => {
    alert(`Message sent successfully`);

  }
  render() {
    const { name, email, message } = this.state
    const enabled = name.length > 0 && email.length > 0 && message.length >0

    return (
      <>
        <form className={styles.ContactUsForm} onSubmit={this.handleSubmit} sx={{mb: 5}}>
          <h3 sx={{
              marginRight: "auto",
          }}>Contact Us</h3>

          <input
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
            placeholder="Email address"
            autoComplete="off"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <textarea
            type="text"
            className={styles.LoginForm__input}
            placeholder="Enter your messege"
            maxLength="500"
            rows="4"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />

          <input
            type="submit"
            className={styles.LoginForm__button}
            value={"Send"}
            disabled={!enabled}
          ></input>

          <label />
        </form>
      </>
    )
  }
}
export default ContactUs
