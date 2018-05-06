import React, { Component } from 'react'
import { removeMyPick } from '../../store/MyPick/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import swal from 'sweetalert'
import './SongsPick.css'

class Songs extends Component {
  removePick() {
    swal({
      title: 'Are you sure?',
      text: `Are you really gonna delete this?"`,
      icon: 'warning',
      buttons: [true, 'Yes Delete it']
    }).then(result => {
      if (result) {
        console.log(this.props.data)
        this.props.removeMyPick(this.props.data.trackId)
        swal('Bye..!', 'Songs Successfully deleted', 'success')
      }
    })
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
          <a className="removePick" onClick={() => this.removePick()}><i className="small material-icons">remove_circle</i></a>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => ({
  mypicks: state.mypicks
}) 

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeMyPick
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs)