import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    id: null,
    email: '',
    password: ''
  }

  onEmailChange = event => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = () => {
      axios.post(`//localhost:8080/units-api/sign-in`,
          {email: this.state.email, password: this.state.password})
          .then(response => console.log(response))
  }

  render() {
   const {id} = this.state
    return (
        <Container className="App">
          <h2>{id ? id :'sign in'}</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    onChange={this.onEmailChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    onChange={this.onPasswordChange}
                />
              </FormGroup>
            </Col>
            <Button onClick={this.onSubmit}>Submit</Button>
          </Form>
        </Container>
    );
  }
}

export default App;
