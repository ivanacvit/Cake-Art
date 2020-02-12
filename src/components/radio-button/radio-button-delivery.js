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
            label='Yes'
            name='checkbox'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            onClick={() =>
              this.setState({ showDelivery: true, deliveryFlag: true })
            }
            
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='No'
            name='checkbox'
            value='that'
            checked={this.state.value === 'that'} 
            onChange={this.handleChange}
            onClick={() =>
              this.setState({ showDelivery: false, deliveryFlag: true})
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