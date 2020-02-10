/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Container from "../components/container"
import Calendar from "../components/calendar"
import RadioButtonDelivery from "../components/radio-button/radio-button-delivery"
import RadioButtonCake from "../components/radio-button/radio-button-cake"
import styles from "../../styles/inputform.module.css"
import ImageUpload from "../components/image-upload"
import ContactInformation from "../components/contact-info"

const Order = () => {
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
                border: "none",
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
                border: "none",
                letterSpacing: "tight",
                pt: [3],
              }}
            >
              WHAT WOULD YOU LIKE TO ORDER?*
            </p>
            <RadioButtonCake />
            <p
              sx={{
                color: "#F78DA7",
                border: "none",
                letterSpacing: "tight",
                pt: [3],
              }}
            >
              HOW MANY CUSTOM CAKES?*
            </p>
            <form className={styles.OrderForm}>
              <input
                type="number"
                className={styles.input}
                placeholder="Number of cakes"
                autoComplete="off"
              />
            </form>
            <p
              sx={{
                color: "#F78DA7",
                border: "none",
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

          <div sx={{ pb: [4] }}>
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
                border: "none",
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
              Have a photo or images that can help us with your custom artwork?
            </p>
            <ImageUpload/>
          </div>

          <div sx={{ pb: [5] }}>
            <h3
              sx={{
                textAlign: "left",
              }}
            >
              Contact Information
            </h3>
            <ContactInformation/>
            </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Order
