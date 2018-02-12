import React, { Component } from "react";
import SignUpForm from '../forms/AddItemForm';

class AddItemPage extends Component {
  render() {
    return (
      <div className="AddItemPage">
        <center>
          <h1>Add Item</h1>
          <NewItemForm />
        </center>
      </div>
    );
  }
}

export default SignUpPage;
