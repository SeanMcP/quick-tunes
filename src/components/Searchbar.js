import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      query: ''
    }
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input id="searchBar" type="text" placeholder="Song or artist" onChange={this.props.onChange} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
