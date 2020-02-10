/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link } from "gatsby"

import styles from "../../styles/inputform.module.css"
import { getUser } from "../../services/authentication"

const ContactInformation = () => {
    const surname="Cvitkovic"
    const name=getUser().name
    const email = getUser().email
    
  return (
    <>
      <form className={styles.DeliveryForm} sx={{pb:[4]}}>

        <input
          type="text"
          className={styles.LoginForm__input}
          value={name}
          autoComplete="off"
        />

        <input
          type="text"
          className={styles.LoginForm__input}
          value={surname}
          autoComplete="off"
        />

        <input
          type="text"
          className={styles.LoginForm__input}
          value={email}
          autoComplete="off"
        />

        <input
        autoFocus
          type="number"
          className={styles.input}
          placeholder="Phone number"
          autoComplete="off"
        />

      
      </form>
    </>
  )
}

export default ContactInformation

// surname is hardcoded 
//inq. confir and send button