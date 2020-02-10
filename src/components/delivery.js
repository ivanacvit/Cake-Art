/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link } from "gatsby"

import styles from "../../styles/inputform.module.css"

const Delivery = () => {
  return (
    <>
      <form className={styles.DeliveryForm} sx={{pb:[4]}}>

        <input
          autoFocus
          type="text"
          className={styles.LoginForm__input}
          placeholder="Delivery Name"
          autoComplete="off"
        />

        <input
          type="text"
          className={styles.LoginForm__input}
          placeholder="Delivery Surname"
          autoComplete="off"
        />

        <input
          type="text"
          className={styles.LoginForm__input}
          placeholder="Street Adress"
          autoComplete="off"
        />

        <input
          type="text"
          className={styles.LoginForm__input}
          placeholder="City"
          autoComplete="off"
        />
        <input
          type="number"
          className={styles.input}
          placeholder="ZIP Code"
          autoComplete="off"
        />

      
      </form>
    </>
  )
}

export default Delivery
