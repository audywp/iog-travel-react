import React,{ Component } from 'react'
import config from '../../utils/config'
import './busess.scss'
import Button from '../../Component/Button'
import axios from 'axios'

class Busess extends Component {

  constructor(props){
    super(props)
    this.state = {
      busess: []
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
                <li>
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
            <li>
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </li>
          </ul>
        </div>
      </div>
      </>
      
    )
  }
}

export default Busess