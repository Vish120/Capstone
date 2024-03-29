import React, { useState } from "react";
import ReactDOM from "react-dom";


import "../login/login.css";

function Login(){
      // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Shehzad",
      password: "password"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const renderForm = (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type= "text" name="uname" placeholder="Username" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" placeholder= "*******"required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            <div className= "pre-signup">
              Dont have an account Yet? <a href=".">Click here</a>
            </div>
          </form>
      );
        return (
            <div className="app">
              <div className="login-form">
                <div className="title">Log In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
              </div>
            </div>
          );
}
        
        
const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
export default Login