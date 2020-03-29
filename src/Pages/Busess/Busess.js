import React,{ Component } from 'react'
import config from '../../utils/config'
import './busess.scss'
import Button from '../../Component/Button'
import axios from 'axios'
// import Modal from './Component/Modal'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
      }
    }

    this.nextData = async() => {
      const results = await axios.get(this.state.pageInfo.nextLink)
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        busess:data,
        pageInfo,
        startFrom: this.state.startFrom + pageInfo.perPage
      })
    }

    this.prevData = async() => {
      const results = await axios.get(this.state.pageInfo.prevLink)
      const { data } =results.data
      const { pageInfo } =results.data
      this.setState({
        busess:data,
        pageInfo,
        startFrom : this.state.startFrom + pageInfo.perPage
      })
    }

    this.updateData = async () => {
      const getData = await axios.update(config.APP_BACKEND.concat(`/agent/bus/update/`))
      const { data } = getData.data
      console.log(data)
    }

  }

  async componentDidMount() {
    const results = await axios.get(config.APP_BACKEND.concat('admin/').concat('bus'))
    const { data } = results.data
    const { pageInfo } = results.data
    this.setState({ busess:data, pageInfo})
    console.log(data)
    
  }




  render() {
    return(
      <>
      <div className="busess">
        <div className="lineWrap"></div>
          <div className="busess-no">
          
            <h1>No.</h1>
              <ul>
                {this.state.busess.map((bus,i) => {
                  return(
                    <li key={bus.id}>
                      {i + 1}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="busess-name">
              <h1>Name</h1>
              <ul>
                {this.state.busess.map((bus, i) => {
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
              {this.state.busess.map((bus, i) => {
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
              {this.state.busess.map((bus, i) => {
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
                <li>
                  <i className="far fa-edit"></i>
                  <i className="far fa-trash-alt"></i>
                </li>
                <li>
                <Link to='bus/update'><i className="far fa-edit"></i></Link>
                  <i className="far fa-trash-alt"></i>
                </li>
                <li>
                  <i className="far fa-edit"></i>
                  <i className="far fa-trash-alt"></i>
                </li>
                <li>
                  <i className="far fa-edit"></i>
                  <i className="far fa-trash-alt"></i>
                </li>
                <li>
                  <i className="far fa-edit"></i>
                  <i className="far fa-trash-alt"></i>
                </li>
              </ul>
            </div>
            <div className="next-prev">
              <button disabled={this.state.pageInfo.nextLink ? false : true} onClick={this.nextData} type='button'> <i className="far fa-arrow-alt-circle-right"></i> </button>
              <button disabled={this.state.pageInfo.prevLink ? false : true} onClick={this.prevData} type='button'> <i className="far fa-arrow-alt-circle-left"></i> </button>
            </div>     
      </div>
      </>
      
    )
  }
}

export default Busess