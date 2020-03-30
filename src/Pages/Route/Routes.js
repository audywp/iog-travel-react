import React,{ Component } from 'react'
import config from '../../utils/config'
import './route.scss'
import Button from '../../Component/Button'
import axios from 'axios'
// import Modal from './Component/Modal'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Routes extends Component {

  constructor(props){
    super(props)
    this.state = {
      routes: [],
      pageInfo: {
        page: 0,
        perPage: 0,
        totalData: 0,
        totalPage: 0,
        nextLink: null,
        prevLink: null
      },
      currentPage: 1,
      sort: 0,
      showModal: false,
      selectedId: 0,
      startFrom: 1
    }

    this.nextData = async() => {
      const results = await axios.get(config.APP_BACKEND.concat(`admin/route?page=${2}`))
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        routes:data,
        pageInfo,
        startFrom: this.state.startFrom + pageInfo.perPage
      })
    }

    this.prevData = async() => {
      const results = await axios.get(config.APP_BACKEND.concat(`admin/route?page=${1}`))
      const { data } =results.data
      const { pageInfo } =results.data
      this.setState({
        routes:data,
        pageInfo,
        startFrom : this.state.startFrom - pageInfo.perPage
      })
    }

    this.updateData = async () => {
      const getData = await axios.update(config.APP_BACKEND.concat(`/agent/bus/update/`))
      const { data } = getData.data
      console.log(data)
    }

  }

  async componentDidMount() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    const results = await axios.get(config.APP_BACKEND.concat('admin/').concat('route'))
    const { data } = results.data
    const { pageInfo } = results.data
    this.setState({ routes:data, pageInfo})
    console.log(results)
    console.log(localStorage.getItem('token'))
    
  }




  render() {
    return(
      <>
      <div className="routes">
        <div className="lineWrap"></div>
          <div className="route-no">
          
            <h1>No.</h1>
              <ul>
                {this.state.routes && this.state.routes.map((r,i) => {
                  return(
                    <li key={r.id}>
                      {this.state.startFrom + i}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="route-start">
              <h1>Name</h1>
              <ul>
                {this.state.routes && this.state.routes.map((r, i) => {
                  return (
                    <li key={r.id}>
                      {r.start}
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div className="route-end">
              <h1>Class</h1>
              <ul>
              {this.state.routes && this.state.routes.map((r, i) => {
                  return (
                    <li key={r.id}>
                      {r.end}
                    </li>
                  )
                })}
              </ul>
            </div>    

            <div className="options">
              <h1>Options</h1>
              <ul>
              {this.state.routes && this.state.routes.map(() => {
                  return (
                    <li>
                      <i className="far fa-edit"></i>
                      <i className="far fa-trash-alt"></i>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="next-prev">
              <button onClick={this.nextData} type='button'> <i className="far fa-arrow-alt-circle-right"></i> </button>
              <button onClick={this.prevData} type='button'> <i className="far fa-arrow-alt-circle-left"></i> </button>
              <p>page {this.state.pageInfo.page} / {this.state.pageInfo.totalPage} </p>
            </div>     
      </div>
      </>
      
    )
  }
}

export default Routes
