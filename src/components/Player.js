import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    return (
      <audio id="audioPlayer" src="" controls="controls">
        Your browser does not support the <code>audio</code> element.
      </audio>
    );
  }
}
