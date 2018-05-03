import React, { Component } from 'react'
import { Modal, Row, Input, Button } from 'react-materialize'
// import { Router, Redirect } from 'react-router-dom'
// import NeedLogin from './NeedLogin'
import swal from 'sweetalert'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.email && this.state.password) {
      console.log('Ga Kosong')
      localStorage.setItem('token', this.state.email + this.state.password)
      // return <NeedLogin /> Ga Bisa
      // return <Redirect push to="/need-login"/> Ga bisa juga
      console.log('Query Selector', document.querySelector('#log-in'))
      document.querySelector('#log-in').className.replace('modal open', 'modal-close')
      console.log('Query Selector After-->', document.querySelector('#log-in'))
      // this.props.history.push('/need-login')
    } else if(!this.state.email) {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Email must be filled'
      })
    } else {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be filled'
      })
    }
  }

  handleInput = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Modal
      id="log-in"
      header='Login'
      trigger={<a>Login</a>}>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Input type="email" label="Email" name="email" s={12}
            value={this.state.email} onChange={this.handleInput} />
            <Input type="password" label="password" name="password" s={12}
            value={this.state.password} onChange={this.handleInput} />
            <Button className="modal-close">Login</Button>
          </Row>
        </form>
      </Modal>
    )
  }
}

export default Login