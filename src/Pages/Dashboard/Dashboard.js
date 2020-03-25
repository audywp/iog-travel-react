import React from 'react'
import {Link} from 'react-router-dom'
import './dashboard.scss'

const Dashbord = function () {
  return(
   <>
   <div className="wrapper">
    <div className="admin">
      <div className="left-side">
        <div className="logo">

          <button type='button'><i className="fas fa-bars"></i></button>
          <h1>IOG TRAVEL</h1>

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
        <button type='button'><i className="far fa-user"></i></button>
        <div className="chart">
          
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Dashbord