import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/dashboard.scss'

const Dashbord = function () {
  return(
   <>
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
        <div className="com">
          
        </div>
        <div className="chart">
          
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Dashbord