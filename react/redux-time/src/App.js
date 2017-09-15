import React, { Component } from 'react';
import UserList from './components/UserList';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Menu/>
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
