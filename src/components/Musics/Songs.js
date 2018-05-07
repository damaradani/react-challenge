import React, { Component } from 'react'
import { addMyPick } from '../../store/MyPick/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import swal from 'sweetalert'
import './Songs.css'

class Songs extends Component {
  addToPick() {
    let trackId = this.props.data.trackId
    let mypickLen = this.props.mypicks.length
    // check track id inside mypick, is it there or not ?
    let cekTrackId = this.props.mypicks.filter(mypick => mypick.trackId === trackId)
    // condition to limit only 9 picks of song
    if (mypickLen < 9) {
      // Condition to check if track already in mypick or not
      if (cekTrackId.length === 0) {
        this.props.addMyPick(this.props.data)
        swal('Great..!', 'Songs Successfully Added to your Pick', 'success')
      }
    } else {
      swal('Sorry!', 'You already have 9 picks, delete one to Add new pick', 'error')
    }
  }

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
          <a href={trackViewUrl} target="__blank">{trackName}</a>
        </td>
        <td>
          <audio controls>
            <source src={previewUrl} type="audio/ogg" />
            <source src={previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
          </audio>
        </td>
        <td>
          <a className="addPick" onClick={() => this.addToPick()}><i className="small material-icons">add_circle</i></a>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => ({
  mypicks: state.mypicks
}) 

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addMyPick
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs)