import React, { Component } from "react";
import SignInForm from '../forms/SignIn';

class SignInPage extends Component {
  render() {
    return (
      <div className="SignInPage">
        <center>
          <h1>Sign In</h1>
          <SignInForm />
        </center>
      </div>
    );
  }
}

export default SignInPage;
