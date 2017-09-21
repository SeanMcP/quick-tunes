import React, { Component } from 'react';

import Playing from './Playing'

export default class Results extends Component {
  constructor(props) {
    super(props)

    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay(e) {
    let player = document.getElementById('audioPlayer')

    if(player.src !== e.target.dataset.previewurl) {
      player.src = e.target.dataset.previewurl
    }

    if(player.classList.contains('playing')) {
      player.pause()
    } else {
      player.play()
    }

    player.classList.toggle('playing')
  }

  render() {
    let resultArr = this.props.data.map(item => {
      return (
        <div key={item.trackId} className="card song">
          <div style={{height: 100, width: 100, backgroundImage: `url('${item.artworkUrl100}')`}}>
            <Playing />
          </div>
          <img src={item.artworkUrl100} alt={item.artistName} data-previewurl={item.previewUrl} onClick={this.handlePlay}/>
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
