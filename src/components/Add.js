import React, { Component } from 'react'
import { Form, Modal, Button } from 'semantic-ui-react'

class Add extends Component {
  initialState = {
    form: {
      name: '',
      username: '',
      countryId:'',
      city:'',
    },
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, username, countryId, city } = this.state.form
    const { addRow } = this.props

    const newUser = {
      countryId,
      name,
      username,
      city,
    }

    addRow(newUser)
    this.setState(this.initialState)
  }

  render() {
    const { name, username, countryId, city } = this.state.form

    return (
      <Modal trigger={<Button id="buttonadd" content="Add New Details" />} closeIcon>
        <Modal.Header ><h2 id="buttontitleadd">Add New Details</h2></Modal.Header>
        <Modal.Content id="formabc">
          <Form onSubmit={this.handleSubmit}>
            
          <Form.Field>
              <Form.Input
                label="country ID"
                name="countryId"
                type ="number"
                value={countryId}
                onChange={this.handleChange}
          
              />
            </Form.Field>

            <Form.Field>
              <Form.Input
                label="Country"
                name="name"
                value={name}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="State"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Form.Input
                label="City"
                name="city"
                value={city}
                onChange={this.handleChange}
          
              />
            </Form.Field>
            <Button id="buttonsubmit" type="submit" content="Submit" disabled={!name || !countryId || !city || !username} />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Add
