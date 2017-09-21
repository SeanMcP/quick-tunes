import React, { Component } from 'react';
import '../styles/App.css';

import Navbar from './Navbar'
import Results from './Results'
import Player from './Player'

class App extends Component {
  constructor() {
    super()
    this.state = {
      results: [],
      query: ''
    }
    this.handleQuery = this.handleQuery.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

  }
  handleQuery(e){
    this.setState({ query: e.target.value })
  }

  handleSearch(e) {
    e.preventDefault()
    this.setState({ query: this.state.query })
    let altQuery = this.state.query.trim().replace(/[^\w\s]/, '').replace(/\s+/, '+')
    console.log('altQuery: ', altQuery);
    fetch('https://itunes.apple.com/search?term=' + altQuery + '&entity=song&limit=24')
    .then(response => response.json())
    .then(data => {
      this.setState({ results: data.results })
      console.log('this.state.results: ', this.state.results);
    })
    .catch(err => console.log('Error fetching data: ', err))
  }

  render() {
    // console.log('this.state.query: ', this.state.query);
    return (
      <div className="App">
        <Navbar onSubmit={this.handleSearch} onChange={this.handleQuery}/>
        <Results data={this.state.results}/>
        <Player />
      </div>
    );
  }
}

export default App;
