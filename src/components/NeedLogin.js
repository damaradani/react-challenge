import React, { Component } from 'react'
import swal from 'sweetalert'
// import { Redirect } from 'react-router-dom'

class NeedLogin extends Component {

  componentWillMount() {
    let token = localStorage.getItem('token')
    if (!token) {
      // return <Redirect push to="/" />
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'U need to Login to Access this Page'
      }).then(result => {
        this.props.history.push('/')
      })
    }
  }

  render() {
    return (
      <div className=".container-fluid">
        <h2>Are You Login yet ?.</h2>
        <p>You can see this Page if you`re already Login</p>
      </div>
    )
  }
}

export default NeedLogin