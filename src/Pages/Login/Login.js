import React,{ useState } from 'react'
import '../../styles/login.scss'
import Button from '../../Component/Button'

const Login = () => {

  return (
    <>
    <div className="login">
      <div className="card">
        <div className="header">
          <h1>Admin Panel</h1>
          <h1 className='logo'>IOG</h1>
        </div>
        <form action="" method="post">
          <div className="adminUsername">
            <label htmlFor="username">Username : </label>
            <input type="text" id="username"/>
            <i className="fas fa-user"></i>
          </div>
          <div className="adminPassword">
            <label htmlFor="password">Password :</label>
            <input type="password" id="password" />
            <i className="fas fa-user-lock"></i>
          </div>
          <div className="button">
            <Button class='login-btn' type='submit' tittle='Login'/>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login