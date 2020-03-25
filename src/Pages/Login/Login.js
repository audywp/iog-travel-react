import React,{Component} from 'react'
import '../../styles/login.scss'

class Login extends Component {
  render() {
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
              <button type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
    )
  }
}

export default Login