import React,{Component} from 'react';
import {BrowserRouter as BR, Route, Switch, Link} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Navbar from './Component/Navbar'
import NotFound from './Component/NotFound'
import Bus from '././Component/Bus'
import Alert from './Component/Alert'
import Home from './Pages/Home'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : false,
      showModal : false
    }

    this.checkLogin = () => {
      if ( localStorage.getItem('token') ) {
        this.setState({
          isLogin: true
        })
      } else {
        this.setState({
          isLogin: false
        })
      }
    }
  }


  render() {
    return(
      
      <BR>
        <div className="App">
          <div className="wrapper">
            <Alert />
          <Navbar />
          <Switch>
            <Route path='/' exact render={(props) => <Home {...props} />} />
              
            <Route path='/roles' exact render={(props) => <Login { ...props } />} />
            <Route path='/roles/dashboard' render={(props) => <Dashboard { ...props } />} />
            <Route path='/bus/update' render={() => <Bus />} />
            <Route component={NotFound} />
          </Switch>
          </div>
        </div>
      </BR>
    )
  }
}
export default App;
