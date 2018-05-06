import React, { Component } from 'react'
import { Navbar } from 'react-materialize'
import { 
  BrowserRouter as Router, 
  Route, Link, Switch 
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import swal from 'sweetalert'

import { login } from './store/User/action'
import Home from './components/Home'
import Login from './components/Login'
import NeedLogin from './components/NeedLogin'
import Music from './components/Music'
import Podcast from './components/Podcast'
import MyPick from './components/MyPick/MyPick'
import './App.css'

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.login(token)
    }
  }

  logout = () => {
    swal({
      title: 'Are you sure?',
      text: `Do you really Logout`,
      icon: 'warning',
      buttons: [true, 'Yes Please']
    }).then(result => {
      if (result) {
        localStorage.removeItem('token')
        this.props.login('')
      }
    })
  }
  
  cekToken() {
    let isLogin = this.props.user.email
    if (!isLogin) {
      return (<Login />)
    } else {
      return (<a onClick={this.logout}>Logout</a>)
    }
  }

  render() {
    let islogin = this.cekToken()
    return (
      <Router>
        <div className="App">
          <Navbar brand="Random 9" right>
            <ul>
              <li><Link to="/music">Music</Link></li>
              <li><Link to="/podcast">Podcast</Link></li>
              <li><Link to="/need-login">Login Only</Link></li>
              <li><Link to="/mypicks">My Pick 9</Link></li>
              <li>{islogin}</li>
            </ul>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/need-login" component={NeedLogin} />
            <Route path="/music" component={Music} />
            <Route path="/podcast" component={Podcast} />
            <Route path="/mypicks" component={MyPick} />
            <Route path="*" render={() => <h2>Are You Lost ?</h2>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
