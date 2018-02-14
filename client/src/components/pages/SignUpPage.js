import React, { Component } from "react";
import SignUpForm from '../forms/SignUpForm';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignUpPage">
        <center>
          <h1>Sign Up</h1>
          <SignUpForm />
        </center>
      </div>
    );
  }
}

export default SignUpPage;
