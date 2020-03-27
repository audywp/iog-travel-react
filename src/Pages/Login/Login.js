import React,{Component} from 'react'
import '../../styles/login.scss'
import Button from '../../Component/Button'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      showAlert: false
    }

    this.formChange = (e,form) => {
      this.setState({[form]:e.target.value})
    }
  
    this.loginCondition = e => {
      e.preventDefault()
  
      const {username, password} = this.state
      if ((username = 'admin') && (password = 'admin')) {
        localStorage.setItem('token', 'true')
        this.props.check()
        this.props.history.push('/roles/dashboard')
      } else {
        this.setState({showAlert: true})
      }
    }
  }

  render() {
    return (
      <>
      <div className="login">
        <div className="card">
          <div className="header">
            <h1>Admin Panel</h1>
            <h1 className='logo'>IOG</h1>
          </div>
          <form action="" method="post" onSubmit={e=>this.loginCondition(e)} >
            <div className="adminUsername">
              <label htmlFor="username">Username : </label>
              <input onChange={ e => this.formChange(e,'username') } type="text" id="username"/>
              <i className="fas fa-user"></i>
            </div>
            <div className="adminPassword">
              <label htmlFor="password">Password :</label>
              <input onChange={ e => this.formChange(e,'password') } type="password" id="password" />
              <i className="fas fa-user-lock"></i>
            </div>
            <div className="button">
              <Button class='login-btn' type='submit' tittle='Login'/>
            </div>
          </form>
        </div>
        {/* <div className="wrongPassword">
          {}
        </div> */}
      </div>
    </>
    )
  }
}

export default Login