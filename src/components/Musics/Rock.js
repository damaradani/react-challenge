import React, { Component } from 'react'
import store from '../../store'
import {Table} from 'react-materialize'
import axios from 'axios'
import Songs from './Songs'

class Rock extends Component {
  constructor() {
    super()
    this.state = {
      data: store.getState().musics
    }

    this.unsubscribe = store.subscribe(() => {
      const newData = store.getState().musics
      this.setState({
        data: newData
      })
    })
  }

  fetchItunesData() {
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=21&limit=9`)
      .then(response => {
        // this.setState({data : response.data.results})
        store.dispatch({
          type: 'LOAD_NEW_MUSIC_DATA',
          payload: response.data.results
        })
        // console.log('', store.getState())
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItunesData()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    let songs = this.state.data.map((song, index) => 
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

export default Rock
