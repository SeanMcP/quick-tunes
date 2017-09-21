import React, { Component } from 'react';

export default class Playing extends Component {
  render() {
    return (
      <div className="playing">
        <div className="pause-button"></div>
        <div className="play-button"></div>
        <div className="spinning"></div>
      </div>
    );
  }
}
