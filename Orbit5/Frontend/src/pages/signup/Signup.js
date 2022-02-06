import Userfront from "@userfront/core";
import React, { Component } from 'react';

// Initialize Userfront Core JS
Userfront.init("demo1234");

class SignupForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          accountName: "",
          password: "",
          passwordVerify: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
          [target.name]: target.value,
        });
      }
    // Handle the form submission by calling Userfront.signup()
    handleSubmit(event) {
         event.preventDefault();
    // Call Userfront.signup()
    Userfront.signup({
      method: "password",
      email: this.state.email,
      password: this.state.password,
      data: {
        accountName: this.state.accountName,
      },
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email address
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Account name (custom field)
            <input
              name="accountName"
              type="text"
              value={this.state.accountName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Verify password
            <input
              name="passwordVerify"
              type="password"
              value={this.state.passwordVerify}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
export default SignupForm
