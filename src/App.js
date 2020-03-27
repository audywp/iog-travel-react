import React,{Component} from 'react';
import {BrowserRouter as BR, Route, Switch, Link} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Navbar from './Component/Navbar'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataDummy : ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10']
    }
  }

  render() {
    return(
      
      <BR>
        <div className="App">
          <div className="wrapper">
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Link to={`/roles/dashboard`}>Go to dashboard</Link> <br></br>
              <Link to={'/roles'} >admin</Link>
            </Route>
            <Route path='/roles' exact render={() => <Login />} />
            <Route path='/roles/dashboard' exact render={() => <Dashboard />} />
          </Switch>
          </div>
        </div>
      </BR>
    )
  }
}
export default App;
