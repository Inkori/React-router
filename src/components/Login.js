import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    // login: "",
    // password: ""
  };
  onLogin(e) {
    e.preventDefault();
    const value = e.target.elements[0].value;
    window.localStorage.setItem("login", value);
  }
  // onPassword(e) {
  //   e.preventDefault();
  //   const value = e.target.elements[1].value;
  //   window.localStorage.setItem("password", value);
  // }

  render() {
    const { login, password } = this.state;
    return (
      <div>
        <div>Enter login and password</div>
        <form onSubmit={this.onLogin} className="form">
          <input
            type="text"
            name="login"
            value={login}
            placeholder="Login..."
          />
          <br />
          <input
            type="password"
            name="login"
            value={password}
            placeholder="Password..."
            onSubmit={this.onPassword}
          />
          <br />

          <button type="submit">Ok</button>
        </form>
      </div>
    );
  }
}

export default Login;
