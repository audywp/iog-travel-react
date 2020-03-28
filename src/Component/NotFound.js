import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/component/notfound.scss'
import Button from '../Component/Button'

export default class NotFound extends Component {

  render() {
    return (
      <>
        <div className="not-found">
          <div className="desc">
            <h1>Are you lost ?</h1>
            <h1>404</h1>
            <h1>Page not Found</h1>
          </div>
         <Link className='toLogin' to='/'>Back to Home</Link>
        </div>
      </>
    )
  }
}
