import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      query: ''
    }

    this.searchAPI = this.searchAPI.bind(this)
  }

  searchAPI(e) {
    e.preventDefault()
    this.setState({query: document.getElementById('searchBar').value})
    console.log('this.state.query: ', this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.searchAPI}>
        <input id="searchBar" type="text" placeholder="Song or artist" value=""/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}
