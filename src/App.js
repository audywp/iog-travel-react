import React,{Component} from 'react';
import {BrowserRouter as BR, Route, Switch, Link} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
class App extends Component {
  render() {
    return(
      <div className="App">
        <BR>
          <Switch>
            <Route path='/' exact>
              <Link to={`/roles/dashboard`}>Go to dashboard</Link>
            </Route>
            <Route path='/roles' exact render={() => <Login />} />
            <Route path='/roles/dashboard' exact render={() => <Dashboard />} />
          </Switch>
        </BR>
      </div>
    )
  }
}
export default App;
