import React, { Component } from "react";
import { Button } from "react-bootstrap";


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <center>
          <p>Swapaway</p>
          <Button href="/items" bsStyle="info" bsSize="large">View Items</Button>
        </center>
      </div>
    );
  }
}

export default HomePage;
