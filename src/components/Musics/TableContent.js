import React, { Component } from 'react'
import { connect } from 'react-redux'

import Songs from './Songs'
import './Songs.css'

class TableContent extends Component {
  render() {
    const { data, loading, error } = this.props.musics
    if (!error.status && loading) {
      return (
      <tr><td colSpan="6">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </td></tr>
      )
    } else if (!loading && data && !error.status) {
      let songsData = data.map((song, index) =>
        <Songs data={song} index={index} key={song.trackId} />
      )
      return (songsData)
    } else {
      return (
        <tr>
          <td colSpan="6">
          {'Something went wrong : ' + error.message }
          </td>
        </tr>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  musics: state.musics
})

export default connect(
  mapStateToProps,
  null
)(TableContent)
