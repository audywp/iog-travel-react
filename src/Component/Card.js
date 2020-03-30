import React, { Component } from 'react'
import '../styles/component/card.scss'

export default class Card extends Component {

  render() {
    return (
      <>
        <div className={this.props.class}>
          <i className={this.props.icon}></i>
          <div className="card-body">
            <h1>Total</h1>
            <h1>{this.props.name}</h1>
            <h2>{this.props.total}</h2>
          </div>
        </div>
      </>
    )
  }
}
