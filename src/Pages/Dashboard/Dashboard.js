import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../../styles/dashboard.scss'
import Busess from '../Busess/Busess'


const Dashbord = function () {
  return(
   <>
    <Router>
   <div className="wrapper">
    <div className="admin">
      <div className="left-side">
        <div className="logo">

          <Link className='logo-iog' to={'/'}>IOG TRAVEL</Link>

        </div>
        <div className="navigation">

          <Link to={'/'}><i className="fas fa-tachometer-alt"></i></Link>
          <Link to={'/'}><i className="far fa-user"></i></Link>
          <Link to={'/'}><i className="fas fa-dollar-sign"></i></Link>
          <Link to={'/'}><i className="fas fa-users"></i></Link>
          <Link to={'/'}><i className="fas fa-bus-alt"></i></Link>
          <Link to={'/'}><i className="far fa-calendar-check"></i></Link>

        </div>
      </div>
      <div className="right-side">
        <div className="searchDashboard">
          <div className="search">
            <button type='submit' ><i className="fas fa-search"></i></button>
            <input type="search" id='search' placeholder='Search' />
          </div>
        </div>
        <div className="dashboardPlace">
          <Busess />
        </div>
      </div>
    </div>
  </div>
  </Router>
  </>
  )
}

export default Dashbord