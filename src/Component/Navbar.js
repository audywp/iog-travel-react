import React, { Component } from 'react'
import '../styles/navbar.scss'
import {Link} from 'react-router-dom'
import Login from '../Pages/Login/Login'

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logIn : 'Login'
    }

    this.onLogout = (props) => {    
        localStorage.removeItem('token')
    }
  }
  
  render() {
    return (
      <>
        <div className="navbar" onLoad={this.checkLogin}>
          <div className="logo">
            {/* <button type='button'><i className="fas fa-bars"></i></button> */}
            <Link className='toHome' to='/'><p>IOG</p></Link>
          </div>
          <div className="logout">
            <Link className='toDashboard' to='/roles/dashboard'><p>Dashboard</p></Link>
            <Link onClick={this.onLogout} className='logIn' to='/roles'>{localStorage.getItem('token') ? 'Logout' : 'Login' }</Link>
            {/* <Link className='logoutThis' to='/roles/dashboard'><p>Logout</p></Link> */}
            {/* <Link className='loginThis' to='/roles'><p>Login</p></Link> */}
          </div>
          {/* <Dropdown class='Logout' endPoint ='/roles' tittle = 'Logout' /> */}
        </div>
      </>
    )
  }
}
