import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../../styles/dashboard.scss'
import Busess from '../Busess/Busess'
import Card from '../../Component/Card'


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

              <Link className='link-items' to={'/'}><p>Dashboard</p><i className="fas fa-tachometer-alt"></i></Link>
              <Link className='link-items' to={'/'}><p>User</p><i className="far fa-user"></i></Link>
              <Link className='link-items' to={'/'}><p>Transactions</p><i className="fas fa-dollar-sign"></i></Link>
              <Link className='link-items' to={'/'}><p>Agen</p><i className="fas fa-users"></i></Link>
              <Link className='link-items' to={'/'}><p>Bus</p><i className="fas fa-bus-alt"></i></Link>
              <Link className='link-items' to={'/'}><p>Schedules</p><i className="far fa-calendar-check"></i></Link>

            </div>
          </div>
          <div className="right-side">
            <div className="searchDashboard">
              <div className="search">
                <button type='submit' ><i className="fas fa-search"></i></button>
                <input type="search" id='search' placeholder='Search' />
              </div>
            </div>
            <div className="card-dashboard">
              <Card name='Bus' class='card-busess' icon='fas fa-bus' />
              <Card name='Route' class='card-routes' icon='far fa-clock' />
              <Card name='Schedules' class='card-schedules' icon='fas fa-calendar-check' />
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