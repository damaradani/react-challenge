import React, { Component } from 'react'
import store from '../../store'
import {Table} from 'react-materialize'
import axios from 'axios'
import Pod from './Pod'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: store.getState().podcasts
    }

    this.unsubscribe = store.subscribe(() => {
      const newPodcast = store.getState().podcasts
      this.setState({
        data: newPodcast
      })
    })
  }

  fetchItunesPodcast() {
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=26&limit=9`)
      .then(response => {
        store.dispatch({
          type: 'LOAD_NEW_PODCAST_DATA',
          payload: response.data.results
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItunesPodcast()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    let podcasts = this.state.data.map((podcast, index) =>
      <Pod data={podcast} index={index} key={podcast.trackId} />
    )

    return (
      <div className='container'>
        <h2>Random 9 Podcast from Itunes</h2>
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

export default Main