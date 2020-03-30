import React,{ Component } from 'react'
import config from '../../utils/config'
import './schedules.scss'
import Button from '../../Component/Button'
import axios from 'axios'
// import Modal from './Component/Modal'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Schedules extends Component {

  constructor(props){
    super(props)
    this.state = {
      schedules: [],
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
      const results = await axios.get(config.APP_BACKEND.concat(`user/schedule?page=${2}`))
      const { result } = results.data
      const { pageInfo } = results.data
      console.log(results)
      this.setState({
        schedules:result,
        pageInfo,
        startFrom: this.state.startFrom + pageInfo.perPage
      })
    }

    this.prevData = async() => {
      const results = await axios.get(config.APP_BACKEND.concat(`user/schedule?page=${1}`))
      const { result } =results.data
      const { pageInfo } =results.data
      this.setState({
        schedules:result,
        pageInfo,
        startFrom : this.state.startFrom - pageInfo.perPage
      })
    }

    this.updateData = async () => {
      const getData = await axios.update(config.APP_BACKEND.concat(`/admin/schedule/update/`))
      const { data } = getData.data
      console.log(data)
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
    const results = await axios.get(config.APP_BACKEND.concat('user/schedule'))
    const { result } = results.data
    const { pageInfo } = results.data
    this.setState({ schedules:result, pageInfo})
    console.log(pageInfo)
    console.log(localStorage.getItem('token'))
    
  }




  render() {
    return(
      <>
      <div className="Schedules">
        <div className="lineWrap"></div>
          <div className="Schedules-no">
          
            <h1>No.</h1>
              <ul>
                {this.state.schedules && this.state.schedules.map((schedule,i) => {
                  return(
                    <li key={schedule.id}>
                      {this.state.startFrom + i}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="bus-name">
              <h1>Bus Name</h1>
              <ul>
                {this.state.schedules && this.state.schedules.map((schedule, i) => {
                  return (
                    <li key={schedule.id}>
                      {schedule.car_name}
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div className="bus-seat" >
              <h1 onClick={this.sortUser}>Seat</h1>
              <ul>
              {this.state.schedules && this.state.schedules.map((schedule, i) => {
                  return (
                    <li key={schedule.id}>
                      {schedule.bus_seat}
                    </li>
                  )
                })}
              </ul>
            </div>    

            <div className="Schedules-start">
              <h1>Start</h1>
              <ul>
              {this.state.schedules && this.state.schedules.map((schedule, i) => {
                  return (
                    <li key={schedule.id}>
                      {schedule.start}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="Schedules-end">
              <h1>End</h1>
              <ul>
              {this.state.schedules && this.state.schedules.map((schedule, i) => {
                  return (
                    <li key={schedule.id}>
                      {schedule.end}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="Schedules-price">
              <h1>Price</h1>
              <ul>
              {this.state.schedules && this.state.schedules.map((schedule, i) => {
                  return (
                    <li key={schedule.id}>
                      {schedule.price}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="options">
              <h1>Options</h1>
              <ul>
              {this.state.schedules && this.state.schedules.map(() => {
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
              <button  onClick={this.nextData} type='button'> <i className="far fa-arrow-alt-circle-right"></i> </button>
              <button  onClick={this.prevData} type='button'> <i className="far fa-arrow-alt-circle-left"></i> </button>
              <p>page {this.state.pageInfo.page} / {this.state.pageInfo.totalPage} </p>
            </div>     
      </div>
      </>
      
    )
  }
}

export default Schedules