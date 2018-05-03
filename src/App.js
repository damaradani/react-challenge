import React, { Component } from 'react'
import { Navbar } from 'react-materialize'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import swal from 'sweetalert'

import Home from './components/Home'
import Login from './components/Login'
import NeedLogin from './components/NeedLogin'
import Music from './components/Music'
import Podcast from './components/Podcast'
import './App.css'

class App extends Component {
  logout() {
    swal({
      title: 'Are you sure?',
      text: `Do you really Logout`,
      icon: 'warning',
      buttons: [true, 'Yes Please']
    }).then(result => {
      if (result) {
        localStorage.removeItem('token')
      }
    })
  }
 
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar brand="Random 9" right>
            <ul>
              <li><Link to="/music">Music</Link></li>
              <li><Link to="/podcast">Podcast</Link></li>
              <li><Link to="/need-login">Login Only</Link></li>
              <li><Login /></li>
            </ul>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/need-login" component={NeedLogin} />
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
