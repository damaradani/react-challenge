import React, { Component } from 'react'
import {Table} from 'react-materialize'

import { getMusics } from '../../store/Musics/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TableContent from './TableContent'

class Alternative extends Component {
  componentDidMount() {
    this.props.getMusics(20)
  }

  render() {
    return (
      <div className='container'>
        <h2>Random 9 Alternative Songs from Itunes</h2>
        <Table className="centered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Artwork</th>
              <th>Artist</th>
              <th>Track Name</th>
              <th>Preview Track</th>
              <th>Actions</th>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMusics
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Alternative)