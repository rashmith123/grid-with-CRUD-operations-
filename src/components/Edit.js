import React, { Component } from 'react'
import { Form, Modal, Button } from 'semantic-ui-react'

class Edit extends Component {
  initialState = {
    form: {
      name: '',
      username: '',
      countryId:'',
      city:'',
    },
  }

  state = this.initialState

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      const user = this.props.getUserById(this.props.id)

      this.setState({
        form: {
          name: user.name,
          username: user.username,
          countryId: user.countryId,
          city: user.city,
        },
      })
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, username, countryId, city } = this.state.form
    const { updateRow } = this.props

    const updatedUser = {
      name,
      username,
      countryId,
      city,
    }

    updateRow(this.props.id, updatedUser)
    this.props.onClose()
  }

  render() {
    const { name, username, countryId, city } = this.state.form
    const { isOpen, onClose } = this.props

    return (
      <Modal open={isOpen} onClose={onClose} closeIcon>
        <Modal.Header><h2 id="buttontitleedit">Edit Details</h2></Modal.Header>
        <Modal.Content id="formdef">
          <Form onSubmit={this.handleSubmit}>

          <Form.Field>
              <Form.Input
                label="Country ID"
                name="countryId"
                value={countryId}
                type= "number"
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Form.Input label="Name" name="name" value={name} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Username"
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

            <Button id="buttonsubmit" type="submit" content="Submit" disabled={!name || !countryId || !city || !username}/>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Edit
