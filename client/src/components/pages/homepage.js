import React, { Component } from "react";
import { Button } from "react-bootstrap";
import logo from '.././navbar/swapaway-dark.png'


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <center>
          <img class="logo" src={logo}/><p>
          </p>
          <Button id="ViewItemsbutton" href="/items" bsSize="large">View Items</Button>
          {'   '}<Button id="Register" href="/signup" bsSize="large">Register</Button>
        </center>
      </div>
    );
  }
}

export default HomePage;
