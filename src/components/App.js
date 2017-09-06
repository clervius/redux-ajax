import React, { Component } from 'react';
import FriendsList from './FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>All My Friends</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;
