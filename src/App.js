import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-materialize'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import Music from './components/Music'
import Podcast from './components/Podcast'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar brand="Random 9">
            <NavItem><Link to="/music">Music</Link></NavItem>
            <NavItem><Link to="/podcast">Podcast</Link></NavItem>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/podcast" component={Podcast} />
            <Route path="*" render={() => <h2>Are You Lost ?</h2>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
