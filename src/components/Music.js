import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Rock from './Musics/Rock'
import Metal from './Musics/Metal'
import Alternative from './Musics/Alternative'
import '../App.css'

class Music extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Link className="btn" to={`${this.props.match.url}`}>Rock</Link>
          <Link className="btn" to={`${this.props.match.url}/metal`}>Metal</Link>
          <Link className="btn" to={`${this.props.match.url}/alternative`}>Alternative</Link>
        </header>
          <Route exact path={`${this.props.match.url}`} component={Rock} />
          <Route path={`${this.props.match.url}/metal`} component={Metal} />
          <Route path={`${this.props.match.url}/alternative`} component={Alternative} />
      </div>
    )
  }
}

export default Music
