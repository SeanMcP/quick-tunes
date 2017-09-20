import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      query: ''
    }
    // this.handleQuery = this.handleQuery.bind(this)
    // this.handleSearch = this.handleSearch.bind(this)
  }

  // handleQuery(e){ this.setState({ query: e.target.value }) }

  // handleSearch(e) {
  //   e.preventDefault()
  //   this.setState({ query: this.state.query })
  //   let altQuery = this.state.query.trim().replace(/[^\w\s]/, '').replace(/\s+/, '+')
  //   console.log('altQuery: ', altQuery);
  //   fetch('https://itunes.apple.com/search?term=' + altQuery + '&entity=song&limit=24')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({ results: data.results })
  //     console.log('this.state.results: ', this.state.results);
  //   })
  //   .catch(err => console.log('Error fetching data: ', err))
  // }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input id="searchBar" type="text" placeholder="Song or artist" onChange={this.props.onChange} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
