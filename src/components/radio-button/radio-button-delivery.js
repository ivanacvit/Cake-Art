/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

import Delivery from "../delivery"

export default class RadioButtonDelivery extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() 
  {
    const { showDelivery } = this.state
    return (
        <>
      <Form>

        <Form.Field>
          <Checkbox
          
            radio
            label='Yes'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            onClick={() =>
              this.setState({ showDelivery: true })
            }
            
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='No'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
            onClick={() =>
              this.setState({ showDelivery: false })
            }
            
          />
        </Form.Field>
      </Form>
      {showDelivery && (
    <Delivery/>)}
    </>
    )
  }
}