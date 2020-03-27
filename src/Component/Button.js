import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <>
        <button className={this.props.class} type={this.props.type}>{this.props.tittle}</button>
      </>
    )
  }
}
