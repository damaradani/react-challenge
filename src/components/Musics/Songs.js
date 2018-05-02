import React, { Component } from 'react'

class Songs extends Component {
  render() {
    let index = this.props.index 
    let {
      artworkUrl60,
      trackId,
      artistName,
      trackName,
      artistViewUrl,
      trackViewUrl,
      previewUrl
    } = this.props.data
    return (
      <tr key={trackId}>
        <td>{index+1}</td>
        <td>
          <img src={artworkUrl60} alt={artistName} />
        </td>
        <td>
          <a href={artistViewUrl} target="__blank">{artistName}</a>
        </td>
        <td>
          <a href={trackViewUrl} target="_blank">{trackName}</a>
        </td>
        <td>
          <audio controls>
            <source src={previewUrl} type="audio/ogg" />
            <source src={previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
          </audio>
        </td>
      </tr>
    )
  }
}

export default Songs