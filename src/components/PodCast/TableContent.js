import React, { Component } from 'react'
import { connect } from 'react-redux'

import Pod from './Pod'

class TableContent extends Component {
  render() {
    const { data, loading, error } = this.props.podcasts
    if (!error.status && loading) {
      return (
      <tr><td colSpan="4">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </td></tr>
      )
    } else if (!loading && data && !error.status) {
      let podData = data.map((podcast, index) =>
        <Pod data={podcast} index={index} key={podcast.trackId} />
      ) 
      return (podData)
    } else {
      return (
        <tr>
          <td colSpan="4">
          {'Something went wrong : ' + error.message }
          </td>
        </tr>
      )
    } 
  }
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts
})

export default connect(
  mapStateToProps,
  null
)(TableContent)