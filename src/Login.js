import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './App.css';
import './Dashboard.js';
import axios from 'axios';
import history from './history';

class Login extends Component {
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
        axios.post(`/admin-api/sign-in`,
            {email: this.state.email, password: this.state.password})
            .then(response => {
                console.log(response)
                history.push('/Dashboard')
            })
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
                    <Button onClick={this.onSubmit}
                    >Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
