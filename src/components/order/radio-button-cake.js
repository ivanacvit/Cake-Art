/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"
import { Form, Checkbox } from "semantic-ui-react"
import { Grid } from "@theme-ui/components"

export default class RadioButtonCake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedCake: true,
      checkedCupcake: true,
      checkedDessert: true,
    }
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
    const { checkedCake, checkedCupcake, checkedDessert } = this.state
    const enabled =
      checkedCake == false || checkedCupcake == false || checkedDessert == false

    var msg1
    if (enabled) {
      msg1 = "checked"
    } else {
      msg1 = "non checked"
    }

    return (
      <>
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
          <p sx={{ color: "grey", letterSpacing: "tight" }}>{msg1}</p>
        </Form>
      </>
    )
  }
}
