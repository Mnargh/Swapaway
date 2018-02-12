import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";

class SignInForm extends Component {
  render() {
    return (
      <div className="SignInForm">
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember Me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignInForm;
