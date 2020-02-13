/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Form } from "semantic-ui-react"
import { Grid } from "@theme-ui/components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import Calendar from "../components/order/calendar"
import RadioButtonDelivery from "../components/order/radio-button-delivery"
import styles from "../../styles/inputform.module.css"
import ImageUpload from "../components/order/image-upload"
import ContactInformation from "../components/order/contact-info"

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "",
      phone: "",
      checked: true,
      checkedCake: true,
      checkedCupcake: true,
      checkedDessert: true,
    }
  }

  handleNumberChange = evt => {
    this.setState({ number: evt.target.value })
  }

  handlePhoneChange = evt => {
    this.setState({ phone: evt.target.value })
  }

  handleSubmit = () => {
    alert(`Your order inquiry is sent`)
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked })
  }

  handleCheckCake = () => {
    this.setState({ checkedCake: !this.state.checkedCake })
  }

  handleCheckCupcake = () => {
    this.setState({ checkedCupcake: !this.state.checkedCupcake })
  }

  handleCheckDessert = () => {
    this.setState({ checkedDessert: !this.state.checkedDessert })
  }

  render() {
    const {
      number,
      phone,
      checked,
      checkedCake,
      checkedCupcake,
      checkedDessert,
    } = this.state
    const enabled =
      number.length > 0 &&
      phone.length > 0 &&
      checked == false &&
      (checkedCake == false ||
        checkedCupcake == false ||
        checkedDessert == false)

    return (
      <Layout>
        <Container>
          <div
            sx={{
              my: [4, 5],
              mx: [4, 6],
            }}
          >
            <p
              sx={{
                textAlign: "center",
                fontSize: [2, 3],
                fontWeight: "semibold",
                pb: [2],
              }}
            >
              CUSTOM ORDER INQUIRY
            </p>

            <p
              sx={{
                textAlign: "center",
                color: "grey",
                letterSpacing: "tight",
                pb: [4],
              }}
            >
              Use the form below for information and pricing for custom orders.
              Simply want to add an inscription to a regular menu item?
            </p>

            <div sx={{ pb: [5] }}>
              <h3
                sx={{
                  textAlign: "left",
                }}
              >
                Step 1: What is the date of your event?
              </h3>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                }}
              >
                {" "}
                <a sx={{ color: "#F78DA7", border: "none" }}>PICK A DATE:*</a>
                <br />
                Custom Orders may need up to 72 hours notice for completion.
              </p>
              <Calendar />
            </div>

            <div sx={{ pb: [5] }}>
              <h3
                sx={{
                  textAlign: "left",
                }}
              >
                Step 2: Tell Us What You Need.
              </h3>
              <p
                sx={{
                  color: "#F78DA7",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                WOULD YOU LIKE DELIVERY?*
              </p>
              <RadioButtonDelivery />
              <p
                sx={{
                  color: "#F78DA7",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                WHAT WOULD YOU LIKE TO ORDER?*
              </p>
              <Form>
                <Grid gap={[0]} columns={[1]}>
                  <div>
                    <input
                      type="checkbox"
                      onChange={this.handleCheckCake}
                      defaultChecked={!this.state.checkedCake}
                    />
                    <label>Custom Cakes</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      onChange={this.handleCheckCupcake}
                      defaultChecked={!this.state.checkedCupcake}
                    />
                    <label>Custom CupCakes</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      onChange={this.handleCheckDessert}
                      defaultChecked={!this.state.checkedDessert}
                    />
                    <label>Custom Desserts</label>
                  </div>
                </Grid>
              </Form>

              <p
                sx={{
                  color: "#F78DA7",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                HOW MANY CUSTOM CAKES?*
              </p>
              <form className={styles.OrderForm}>
                <input
                  type="number"
                  className={styles.LoginForm__input}
                  placeholder="Number of cakes"
                  autoComplete="off"
                  value={this.state.number}
                  onChange={this.handleNumberChange}
                />
              </form>
              <p
                sx={{
                  color: "#F78DA7",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                WHAT IS THE OCCASION?
              </p>
              <form className={styles.OrderForm}>
                <input
                  type="text"
                  className={styles.LoginForm__input}
                  placeholder="Occasion"
                  autoComplete="off"
                />
              </form>
            </div>

            <div sx={{ pb: [5] }}>
              <h3
                sx={{
                  textAlign: "left",
                }}
              >
                Step 3: Do You Need Decoration?
              </h3>
              <p
                sx={{
                  color: "#F78DA7",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                ARTWORK DESCRIPTION
              </p>
              <form className={styles.OrderForm}>
                <textarea
                  placeholder="Enter artwork description"
                  maxLength="1000"
                  rows="10"
                  className={styles.LoginForm__input}
                />
              </form>
              <p
                sx={{
                  color: "grey",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                {" "}
                <a sx={{ color: "#F78DA7", border: "none" }}>UPLOAD A PHOTO:</a>
                <br />
                Have a photo or images that can help us with your custom
                artwork?
              </p>
              <ImageUpload />
            </div>

            <div sx={{ pb: [5] }}>
              <h3
                sx={{
                  textAlign: "left",
                }}
              >
                Step 4: Contact Information*
              </h3>
              <ContactInformation
                value={this.state.phone}
                onChange={this.handlePhoneChange}
              />
            </div>

            <div sx={{ pb: [5] }}>
              <h3
                sx={{
                  textAlign: "left",
                }}
              >
                INQUIRY CONFIRMATION*
              </h3>
              <Form
                sx={{
                  color: "#F78DA7",
                  letterSpacing: "tight",
                  pt: [3],
                }}
              >
                <input
                  type="checkbox"
                  onChange={this.handleCheck}
                  defaultChecked={!this.state.checked}
                />
                <label>
                  I understand this is an inquiry form only and that a Cake Art
                  representative will contact me directly to complete and
                  confirm my order.{" "}
                </label>
              </Form>
            </div>

            <form onSubmit={this.handleSubmit}>
              <input
                disabled={!enabled}
                type="submit"
                value={"Send"}
                sx={{
                  outline: "0",
                  color: "white",
                  border: "1px solid white",
                  background: "#F78DA7",
                  padding: "12px 28px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "inherit",
                  display: "block",
                  marginTop: "10px",
                  marginBottom: "10px",
                  "&:hover": {
                    boxShadow: "0 0 5px rgba(0,0,0,0.24)",
                  },
                }}
              ></input>
            </form>
          </div>
        </Container>
      </Layout>
    )
  }
}
export default Order
