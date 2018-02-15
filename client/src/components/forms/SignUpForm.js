import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";

class SignUpForm extends Component {

  // constructor(){
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event){
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //
  //   console.log(data);
  //
  //   fetch('/users/new',{
  //     method: "POST",
  //     body: data,
  //   });
  //
  //   console.log(data);
  // }

  render() {
    return (
      <div className="SignUpForm">
        <Form horizontal action='/users/new' method="POST">
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
              User Name
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="username" placeholder="User Name" />
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
            <Col componentClass={ControlLabel} sm={2}>
              Bio
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="bio" placeholder="Add something about your self" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Profile Picture
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="picture" placeholder="Add URL" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={0} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignUpForm;
