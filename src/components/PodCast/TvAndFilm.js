import React, { Component } from 'react'
import {Table} from 'react-materialize'
import axios from 'axios'
import Pod from './Pod'

class TvAndFilm extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          trackId: 0,
          artworkUrl60: '',
          artistName: 'PodCast 1',
          trackName: 'Podcast 1',
          artistViewUrl: 'link Artist',
          trackViewUrl: 'track url'
        }
      ]
    }
  }

  fetchItunesPodcast() {
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=1309&limit=9`)
      .then(response => {
        console.log(response.data.results)
        this.setState({data : response.data.results})
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItunesPodcast()
  }

  render() {
    let podcasts = this.state.data.map((podcast, index) =>
      <Pod data={podcast} index={index} key={podcast.trackId} />
    )

    return (
      <div className='container'>
        <h2>Random 9 Tv and Films Podcast from Itunes</h2>
        <Table className="centered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Artwork</th>
              <th>Artist</th>
              <th>Podcast Name</th>
            </tr>
          </thead>
          <tbody>
            {podcasts}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TvAndFilm