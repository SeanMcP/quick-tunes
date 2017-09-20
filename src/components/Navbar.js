import React, { Component } from 'react';

import Searchbar from './Searchbar'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>QuickTunes<span className="text-muted">30 seconds of your favorite songs</span></h1>
        <Searchbar onSubmit={this.props.onSubmit} onChange={this.props.onChange}/>
      </nav>
    );
  }
}
