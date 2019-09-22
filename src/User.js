import React, { Component } from 'react';
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>User Info</h1>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
            <button onClick={context.logout}>Logout</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
