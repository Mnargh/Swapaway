import React, { Component } from "react";
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <center>
          <h1>Login</h1>
          <LoginForm />
        </center>
      </div>
    );
  }
}

export default LoginPage;
