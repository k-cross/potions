import React, { Component } from 'react';
import UserList from './components/UserList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const users = [];
    for (let i of Array(10).keys()) {
        users.push({
        id: i,
        username: 'ken' + i,
        job: 'employee ' + i,
      })
    }

    this.state = {
      users: users,
    }
  }

  render() {
    return (
      <div className="App">
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
