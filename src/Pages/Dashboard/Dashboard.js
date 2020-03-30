import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, StaticRouter} from 'react-router-dom'
import '../../styles/dashboard.scss'
import Busess from '../Busess/Busess'
import Card from '../../Component/Card'
import Routes from '../Route/Routes'
import axios from 'axios'
import Schedules from '../Schedules/Schedules'
import config from '../../utils/config'
import Bus from '../../Component/Bus'
// axios.defaults.headers.common = {'Autorization': `Bearer ${localStorage.getItem('token')}`}

class Dashbord extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      totalBus: 0,
      totalRoute: 0,
      totalScedules: 0,
      busses: [],
      selectedId: 0
    }
    if (!localStorage.getItem('token')) {
      this.props.history.push('/roles')
    }

    this.searchBus = async (e) => {
      const getData = await axios.get(config.APP_BACKEND.concat(`admin/bus?search[busses]=${e.target.value}`))
      const { data } = getData.data
      const { pageInfo } = getData.data
      this.setState({
        busses: data,
        pageInfo,
        selectedId:0
      })
    }
  }

  async componentDidMount() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    const totalBus =  await axios.get(config.APP_BACKEND.concat('admin/').concat('bus'))
    const dataBus = totalBus.data.pageInfo
    const totalRoute =  await axios.get(config.APP_BACKEND.concat('admin/').concat('route'))
    const dataRoute  = totalRoute.data.pageInfo
    const totalScedules = await axios.get(config.APP_BACKEND.concat('user/schedule'))
    const dataSchedule  = totalScedules.data.pageInfo
    if (localStorage.getItem('token')) {
      this.setState({
        totalBus : dataBus.totalData || 0,
        totalRoute : dataRoute.totalData || 0,
        totalScedules : dataSchedule.totalData || 0
      })
    } else {
      console.log('ok')
    }
    
  }

  render(){

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

                <Link className='link-items' to={'/roles/dashboard/bus'}><p>Bus</p><i className="fas fa-bus-alt"></i></Link>
                <Link className='link-items' to={'/roles/dashboard/route'}><p>Route</p><i className="fas fa-users"></i></Link>
                <Link className='link-items' to={'/roles/dashboard/'}><p>Schedules</p><i className="far fa-calendar-check"></i></Link>
  
              </div>
            </div>
            <div className="right-side">
              <div className="searchDashboard">
                <div className="search">
                  <button type='submit' ><i className="fas fa-search"></i></button>
                  <input onChange={this.searchBus} type="search" id='search' placeholder='Search' />
                </div>
              </div>
              <div className="card-dashboard">
                <Card total={this.state.totalBus} name='Bus' class='card-busess' icon='fas fa-bus' />
                <Card total={this.state.totalRoute}  name='Route' class='card-routes' icon='far fa-clock' />
                <Card total={this.state.totalScedules} name='Schedules' class='card-schedules' icon='fas fa-calendar-check' />
              </div>
              <div className="dashboardPlace">
                <Switch>
                  <Route component={ Busess } path='/roles/dashboard/bus' exact/>
                  <Route component={ Routes }  path='/roles/dashboard/route' exact/>
                  <Route component={ Schedules } path='/roles/dashboard/' exact/>
                  <Route component={ Bus } path='/roles/dashboard/bus/update'/>
                </Switch>
                
              </div>
            </div>
          </div>
        </div>
        </Router>
    </>
    )
  }
}

export default Dashbord