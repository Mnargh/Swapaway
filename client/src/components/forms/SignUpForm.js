import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";

class SignUpForm extends Component {
  render() {
    return (
      <div className="SignUpForm">
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
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="First Name" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Last Name" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              User Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="User Name" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Bio
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Add something about your self" />
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

export default SignUpForm;
