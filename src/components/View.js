import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Edit from './Edit.js'
import './style.css'


class View extends Component {
  state = {
    isOpen: false,
    id: '',
  }

  onClose = () => {
    this.setState({ isOpen: false })
  }

  onOpen = () => {
    this.setState({ isOpen: true, id: this.props.id })
  }

  render() {
    const { isOpen, id } = this.state
    const { data, deleteRow, updateRow, getUserById } = this.props

    return (
      <div>
        <Edit
          onClose={this.onClose}
          isOpen={isOpen}
          id={id}
          updateRow={updateRow}
          getUserById={getUserById}
        />
        <Table id="details" sortable celled fixed id="details"> 
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><h3 id="title">ID</h3></Table.HeaderCell>
              <Table.HeaderCell><h3 id="title">Country</h3></Table.HeaderCell>
              <Table.HeaderCell><h3 id="title">State</h3></Table.HeaderCell>
              <Table.HeaderCell><h3 id="title">City</h3></Table.HeaderCell>
              <Table.HeaderCell><h3 id="title">Action</h3></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(row => (
              <Table.Row key={row.name}>
                <Table.Cell><h4 id="title">{row.countryId}</h4></Table.Cell>
                <Table.Cell><h4 id="title">{row.name}</h4></Table.Cell>
                <Table.Cell><h4 id="title">{row.username}</h4></Table.Cell>
                <Table.Cell><h4 id="title">{row.city}</h4></Table.Cell>
                <Table.Cell>
                  <Button id="buttonedit"
                    content="Edit"
                    onClick={() => {
                      this.setState({ isOpen: true, id: row.name })
                    }}
                  />
                  <Button id="buttondelete"
                    content="Delete"
                    onClick={() => {
                      deleteRow(row.name)
                    }}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default View
