import React, { Component } from 'react'
import { Table } from 'react-materialize'
import { connect } from 'react-redux'
import SongsPick from './SongsPick'
import swal from 'sweetalert'

class MyPick extends Component {
  componentWillMount() {
    let token = localStorage.getItem('token')
    if (!token) {
      // return <Redirect push to="/" />
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'U need to Login to Access this Page'
      }).then(result => {
        this.props.history.push('/')
      })
    }
  }

  cekLogin = () => {
    if (!this.props.user.email) {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'U need to Login to Access this Page'
      }).then(result => {
        this.props.history.push('/')
      })
    }
  }

  render() {
    const data = this.props.mypicks
    this.cekLogin()
    // console.log('MyPick ===>',this.props.mypicks)
    let songPicks = data.map((song, index) => 
      <SongsPick data={song} index={index} key={song.trackId} />
    )
    return (
      <div className="container">
        <h2>My 9 Pick Musics</h2>
        <Table className="centered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Artwork</th>
              <th>Artist</th>
              <th>Track Name</th>
              <th>Preview Track</th>
              <th>Remove</th>
            </tr>  
          </thead>
          <tbody>
            {songPicks}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mypicks: state.mypicks,
  user: state.user
})

export default connect(
  mapStateToProps,
  null
)(MyPick)