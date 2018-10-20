import React, { Component } from 'react';
import Search from '../../containers/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="App-title">SWAPI Search</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
