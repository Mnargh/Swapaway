import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";

class NewItemForm extends Component {

  render() {
    return (
      <div className="NewItemForm">
        <Form horizontal action='/items/new' method="POST">
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Item name
            </Col>
            <Col sm={10}>
              <FormControl type="text" name="name" placeholder="Item Name" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Item Picture
            </Col>
            <Col sm={10}>
              <FormControl type="file" name="picture" accept="image/*" placeholder="Item Picture" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Description
            </Col>
            <Col sm={10}>
              <FormControl type="text" name="description" placeholder="Description" />
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

export default NewItemForm;
