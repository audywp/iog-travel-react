import React,{ Component } from 'react'
import '../../styles/login.scss'
import Button from '../../Component/Button'
import Axios from 'axios'
import config from '../../utils/config'
import Swal from 'sweetalert2'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username:'',
      password:'',
      login: false
    }
    
    this.setUsername = (e) => {
      
      this.setState({
        username: e.target.value
      })
    }
    this.setPassword = (e) => {
      
      
      this.setState({
        password: e.target.value
      })
    }

     this.onLogin = async (e) => {
      e.preventDefault()
      let params = {
        username : this.state.username,
        password : this.state.password
      }
      
      const infoLogin = await Axios.post(config.APP_BACKEND.concat('user/login'), params)
      console.log(infoLogin)
      if (infoLogin.data.success === true) {
        localStorage.setItem('token', infoLogin.data.token)
        this.props.history.push('/roles/dashboard')
        this.setState({
          login: true
        })
        
      } else {
        alert('wrong username or password')
      }
      
    }
    
    this.checkLogin = () => {
      if(localStorage.getItem('token')){
        this.props.history.push('/roles/dashboard')
      }
    }

    if (localStorage.getItem('token')) {
      this.props.history.push('/')
    }
  }

  

  

render(){
  return (
    <>
    <div className="login">
      <div className="card">
        <div className="header">
          <h1>Admin Panel</h1>
          <h1 className='logo'>IOG</h1>
        </div>
        <form method='post' onSubmit= { this.onLogin}>
          <div className="adminUsername">
            <label htmlFor="username">Username : </label>
            <input onChange= { e => this.setUsername(e)} type="text" id="username" name='username' />
            <i className="fas fa-user"></i>
            
          </div>
          <div className="adminPassword">
            <label htmlFor="password">Password :</label>
            <input onChange= { e=> this.setPassword (e)} type="password" id="password" name='password' />
            <i className="fas fa-user-lock"></i>
          </div>
          <div className="button">
            <Button onClick={this.state.logIn} class='login-btn' type='submit' tittle='Login'/>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
}

export default Login