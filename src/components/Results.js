import React, { Component } from 'react';

export default class Results extends Component {
  render() {
    let resultArr = this.props.data.map(item => {
      return (
        <div key={item.trackId} className="card">
          <img src={item.artworkUrl100} alt={item.artistName} />
          <h4 className="card-title">{item.trackCensoredName}</h4>
          <p>{item.artistName}</p>
          <p>From {item.collectionCensoredName}</p>
        </div>
      )
    })
    return (
      <div>
        {resultArr}
      </div>
    );
  }
}
