import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Link to="/">Home</Link>
        <Link to="posts">Posts</Link>
        <Link to="comments">Comments</Link>
      </Fragment>
    );
  }
}

export default Header;
