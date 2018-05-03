import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import Main from './PodCast/Main'
import TvAndFilm from './PodCast/TvAndFilm'
import '../App.css'

class PodCast extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Link className="btn" to={`${this.props.match.url}`}>Main</Link>
          <Link className="btn" to={`${this.props.match.url}/tv-and-film`}>Tv And Film</Link>
        </header>
          <Route exact path={`${this.props.match.url}`} component={Main} />
          <Route path={`${this.props.match.url}/tv-and-film`} component={TvAndFilm} />
      </div>
    )
  }
}

export default PodCast
