/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Container from "../components/container"

const Order = () => {
  return (
    <Layout>
      <Container>
        <div
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            my: [4, 5],
            mx:[4,6]
          }}
        >
          <p
            sx={{
              textAlign: "center",
              fontSize: [2, 3],
              fontWeight: "semibold",
              color: "grey",
              pb:[3]
            }}
          >
            CUSTOM ORDER INQUIRY
          </p>
          
          <p
            sx={{
              color: "grey",
              letterSpacing: "tight",
            }}
          >
            Use the form below for information and pricing for custom orders.
            Simply want to add an inscription to a regular menu item?
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default Order
