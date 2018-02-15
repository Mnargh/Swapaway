import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import '../../App.css'
class NewItemForm extends Component {

  render() {
    return (
      <div className="NewItemForm">
        <Form horizontal action='/items/new' method="POST">
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Item name
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="name" placeholder="Red Paperclip" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              URL
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="picture" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Description
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="description" placeholder="Worth thousands of dollars" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Condition
            </Col>
            <Col sm={6}>
              <FormControl type="text" name="condition" placeholder="Excellent" />
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

export default NewItemForm;
