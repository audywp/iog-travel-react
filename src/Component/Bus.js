import React, { Component } from 'react'
import '../styles/component/Bus.scss'
import config from '../utils/config'

export default class Bus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {}
    }
  }

  // async componentDidMount () {
  //   const getData = await axios.get(config.APP_BACKEND.concat)
  // }

  render() {
    return (
      <>
        <div className="formUpdate" id='modal'>
          <h1>UPDATE BUS</h1>
          <form action="" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="className">Class</label>
            <input type="text" name="className" id="className"/>

            <label htmlFor="seat">Seat</label>
            <input type="text" name="seat" id="seat"/>
          </form>
        </div>
      </>
    )
  }
}
