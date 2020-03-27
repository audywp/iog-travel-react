import React, { Component } from 'react'
// import DropdownItems from './DropdownItems'
import { Link } from 'react-router-dom'

export default class Dropdown extends Component {
  render() {
    return (
      <>
        <div className="dropdown-fields">
          <div className="dropdown-items">
            <Link className={this.props.Logout} to={this.props.endPoint}>{this.props.tittle}</Link>
          </div>
        </div>
      </>
    )
  }
}
