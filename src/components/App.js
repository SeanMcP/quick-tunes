import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor() {
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