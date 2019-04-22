import React from'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export default class Body extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <Container>
        <Form>
          <p>Hello</p>
        </Form>
      </Container>
    )
  }
}