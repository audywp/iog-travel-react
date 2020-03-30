import React, { Component } from 'react'
import '../styles/component/Bus.scss'
import config from '../utils/config'
import Button from '../Component/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Bus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {}
    }
  }

  async componentDidMount () {
    const getData = await axios.get(config.APP_BACKEND.concat)
  }

  render() {
    return (
      <>
        <div className="formUpdate" id='modal'>
          <h1>UPDATE BUS</h1>
          <form action="" method="post">
            <label htmlFor="name">Agent</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="className">Name</label>
            <input type="text" name="className" id="className"/>

            <label htmlFor="seat">Class</label>
            <input type="text" name="seat" id="seat"/>

            <label htmlFor="seat">Seat</label>
            <input type="text" name="seat" id="seat"/>
          </form>
          <Button class='updateSubmit' type='submit' tittle='Submit' />
          <Link className='cancelUpdate' to={'/roles/dashboard/bus'}><i className="fas fa-times"></i></Link>
        </div>
      </>
    )
  }
}
