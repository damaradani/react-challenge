import React, { Component } from 'react'
import {Table} from 'react-materialize'

import { getPodcasts } from '../../store/PodCast/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TableContent from './TableContent'

class Main extends Component {
  componentDidMount() {
    this.props.getPodcasts(26)
  }

  render() {
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
            <TableContent />
          </tbody>
        </Table>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   podcasts: state.podcasts
// })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPodcasts
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Main)