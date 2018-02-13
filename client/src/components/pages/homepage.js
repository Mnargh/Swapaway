import React, { Component } from "react";
import { Button } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <center>
          <h1>Swapaway</h1>
          <Button href="/items" bsStyle="info" bsSize="large">View Items</Button>
        </center>
      </div>
    );
  }
}

export default HomePage;
