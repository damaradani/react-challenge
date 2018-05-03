import React, { Component } from 'react'
import {Table} from 'react-materialize'
import axios from 'axios'
import Songs from './Songs'
import { connect } from 'react-redux'
// import {  } from 'redux'

class Rock extends Component {
  fetchItunesData() {
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=21&limit=9`)
      .then(response => {
        this.props.getRock(response.data.results)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItunesData()
  }

  render() {
    let songs = this.props.musics.map((song, index) => 
      <Songs data={song} index={index} key={song.trackId}/>
    )

    return (
      <div className='container'>
        <h2>Random 9 Rock Songs from Itunes</h2>
        <Table className="centered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Artwork</th>
              <th>Artist</th>
              <th>Track Name</th>
              <th>Preview Track</th>
            </tr>
          </thead>
          <tbody>
            {songs}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  musics: state.musics
})

const mapDispatchToProps = (dispatch) => ({
  getRock: (Rock) => dispatch({
    type: 'LOAD_NEW_MUSIC_DATA',
    payload: Rock
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rock)
