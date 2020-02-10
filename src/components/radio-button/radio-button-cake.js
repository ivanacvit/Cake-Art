/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"
import { Form, Checkbox } from "semantic-ui-react"

export default class RadioButtonCake extends Component {
  render()
   {
    return (
      <>
        <Form>
          <Checkbox label="Custom Cakes" />

          <Checkbox label="Custom CupCakes" />

          <Checkbox label="Custom Desserts" />
        </Form>

       
      </>
    )
  }
}
