import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DropdownItems extends Component {
  render() {
    return (
      <>
        <Link to={this.props.endPoint}>{this.props.tittle}</Link>
      </>
    )
  }
}
