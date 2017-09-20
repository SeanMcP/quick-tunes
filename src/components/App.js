import React, { Component } from 'react';
import '../styles/App.css';

import Player from './Player'

class App extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Results results={this.state.results}/>
        <Player />
      </div>
    );
  }
}

export default App;
