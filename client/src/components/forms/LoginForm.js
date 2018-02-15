import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <Form horizontal action="users/login" method="POST">
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={6}>
              <FormControl type="email" name="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={6}>
              <FormControl type="password" name="password" placeholder="Password" />
            </Col>
          </FormGroup>


          <FormGroup>
            <Col sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
