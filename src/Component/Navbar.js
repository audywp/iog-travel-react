import React, { Component } from 'react'
import '../styles/navbar.scss'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="logo">
            {/* <button type='button'><i className="fas fa-bars"></i></button> */}
            <Link className='toHome' to='/'><p>IOG</p></Link>
          </div>
          <div className="logout">
            <Link className='toDashboard' to='/roles/dashboard'><p>Dashboard</p></Link>
            <button type='btn'><i className="fas fa-user"></i></button>
            {/* <Link className='logoutThis' to='/roles/dashboard'><p>Logout</p></Link> */}
            {/* <Link className='loginThis' to='/roles'><p>Login</p></Link> */}
          </div>
          {/* <Dropdown class='Logout' endPoint ='/roles' tittle = 'Logout' /> */}
        </div>
      </>
    )
  }
}
