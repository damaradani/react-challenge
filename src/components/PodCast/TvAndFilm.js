import React, { Component } from 'react'
import {Table} from 'react-materialize'
import axios from 'axios'
import Pod from './Pod'
import { getPodcasts } from '../../store/PodCast/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TvAndFilm extends Component {
  fetchItunesPodcast() {
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=1309&limit=9`)
      .then(response => {
        this.props.getPodcasts(response.data.results)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItunesPodcast()
  }

  render() {
    let podcasts = this.props.podcasts.map((podcast, index) =>
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

const mapStateToProps = (state) => ({
  podcasts: state.podcasts
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPodcasts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TvAndFilm)