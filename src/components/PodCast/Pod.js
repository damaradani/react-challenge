import React, { Component } from 'react'

class Pod extends Component {
  render() {
    let index = this.props.index 
    let {
      artworkUrl60,
      trackId,
      artistName,
      trackName,
      artistViewUrl,
      trackViewUrl
    } = this.props.data
    return (
      <tr key={trackId}>
        <td>{index+1}</td>
        <td>
          <img src={artworkUrl60} alt={artistName} />
        </td>
        <td>
          {artistName}
        </td>
        <td>
          <a href={trackViewUrl} target="_blank">{trackName}</a>
        </td>
      </tr>
    )
  }
}

export default Pod