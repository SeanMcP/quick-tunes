import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      query: ''
    }
    this.handleQuery = this.handleQuery.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleQuery(e){ this.setState({ query: e.target.value }) }

  handleSearch(e) {
    e.preventDefault()
    this.setState({ query: this.state.query })
    let altQuery = this.state.query.trim().replace(/[^\w\s]/, '').replace(/\s+/, '+')
    console.log('altQuery: ', altQuery);
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input id="searchBar" type="text" placeholder="Song or artist" onChange={this.handleQuery} value={this.state.query} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
