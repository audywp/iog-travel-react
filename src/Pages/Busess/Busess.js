import React,{ Component } from 'react'
import config from '../../utils/config'
import './busess.scss'
import Button from '../../Component/Button'
import axios from 'axios'
// import Modal from './Component/Modal'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Busess extends Component {

  constructor(props){
    super(props)
    this.state = {
      busess: [],
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
      const results = await axios.get(config.APP_BACKEND.concat(`admin/bus?page=${2}`))
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        busess:data,
        pageInfo,
        startFrom: this.state.startFrom + pageInfo.perPage
      })
    }

    this.prevData = async() => {
      const results = await axios.get(config.APP_BACKEND.concat(`admin/bus?page=${1}`))
      const { data } =results.data
      const { pageInfo } =results.data
      this.setState({
        busess:data,
        pageInfo,
        startFrom : this.state.startFrom - pageInfo.perPage
      })
    }

    this.updateData = async () => {
      const getData = await axios.update(config.APP_BACKEND.concat(`/admin/bus/update/`))
      const { data } = getData.data
      console.log(getData)
    }
    this.searchUser = async (e) => {
      const results = await axios.get(config.APP_BACKEND.concat(`users?search[username]=${e.target.value}`))
      const {data} = results.data
      const {pageInfo} = results.data
      this.setState({users:data, pageInfo})
    }
    this.sortUser = async () => {
      this.setState({sort:(this.state.sort?'':1)})
      const results = await axios.get(config.APP_BACKEND.concat(`users?sort[username]=${this.state.sort}`))
      const {data} = results.data
      const {pageInfo} = results.data
      this.setState({users:data, pageInfo})
    }
    this.deleteData = async()=> {
      const results = await axios.delete(config.APP_BACKEND.concat(`users/${this.state.selectedId}`))
      if(results.data.success){
        console.log('test')
        const newData = await axios.get(config.APP_BACKEND.concat('users'))
        const {data} = newData.data
        const {pageInfo} = newData.data
        this.setState({users:data, pageInfo, showModal: false, selectedId:0})
      }else {
        console.log(results.data)
      }
    }

    
    
  }
  
  async componentDidMount() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    const results = await axios.get(config.APP_BACKEND.concat('admin/').concat('bus'))
    const { data } = results.data
    const { pageInfo } = results.data
    this.setState({ busess:data, pageInfo})
    console.log(results)
    console.log(localStorage.getItem('token'))
    
  }




  render() {
    return(
      <>
      <div className="busess">
        <div className="lineWrap"></div>
          <div className="busess-no">
          
            <h1>No.</h1>
              <ul>
                {this.state.busess && this.state.busess.map((bus,i) => {
                  return(
                    <li key={bus.id}>
                      {this.state.startFrom + i}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="busess-name">
              <h1>Name</h1>
              <ul>
                {this.state.busess && this.state.busess.map((bus, i) => {
                  return (
                    <li key={bus.id}>
                      {bus.car_name}
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div className="busess-class">
              <h1>Class</h1>
              <ul>
              {this.state.busess && this.state.busess.map((bus, i) => {
                  return (
                    <li key={bus.id}>
                      {bus.bus_class}
                    </li>
                  )
                })}
              </ul>
            </div>    

            <div className="busess-sheets">
              <h1>Sheets</h1>
              <ul>
              {this.state.busess && this.state.busess.map((bus, i) => {
                  return (
                    <li key={bus.id}>
                      {bus.bus_seat}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="options">
              <h1>Options</h1>
              <ul>
              {this.state.busess && this.state.busess.map((bus) => {
                  return (
                    <li>
                      <Link to={`bus/update/${bus.id}`} ><i className="far fa-edit"></i></Link>
                      <i className="far fa-trash-alt"></i>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="next-prev">
              <button  onClick={this.nextData} type='button'> <i className="far fa-arrow-alt-circle-right"></i> </button>
              <button  onClick={this.prevData} type='button'> <i className="far fa-arrow-alt-circle-left"></i> </button>
              <p>page {this.state.pageInfo.page} / {this.state.pageInfo.totalPage} </p>
            </div>     
      </div>
      </>
      
    )
  }
}

export default Busess