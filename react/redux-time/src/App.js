import React, { Component } from 'react';
import UserList from './components/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
