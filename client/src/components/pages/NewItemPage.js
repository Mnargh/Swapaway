import React, { Component } from "react";
import NewItemForm from '../forms/NewItemForm';

class NewItemPage extends Component {
  render() {
    return (
      <div className="NewItemPage">
        <center>
          <h1>Add Item</h1>
          <NewItemForm />
        </center>
      </div>
    );
  }
}

export default NewItemPage;
