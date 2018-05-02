import React, { Component } from 'react'
import {Table} from 'react-materialize'
import axios from 'axios'
import Songs from './Songs'


class Metal extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          trackId: 0,
          artworkUrl60: '',
          artistName: 'Metal 1',
          trackName: 'Metal Songs 1',
          artistViewUrl: 'link Artist',
          trackViewUrl: 'track url',
          previewUrl: 'trackpreview'
        }
      ]
    }
  }

  fetchItunesData() {
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=1153&limit=9`)
      .then(response => {
        console.log(response.data.results)
        this.setState({data : response.data.results})
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItunesData()
  }

  render() {
    let songs = this.state.data.map((song, index) => 
      <Songs data={song} index={index} key={song.trackId}/>
    )

    return (
      <div className="container">
        <h2>Random 9 Metal Songs from Itunes</h2>
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

export default Metal
