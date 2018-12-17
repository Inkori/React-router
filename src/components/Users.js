import React, { Component } from "react";

class Users extends Component {
  state = {};
  render() {
    const { data, id } = this.props;
    const result = (
      <ul className="users">
        <li key={id} className="user">
          <span>{data.username}</span>
        </li>
      </ul>
    );

    return result;
  }
}

export default Users;
