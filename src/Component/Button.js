import React, { Component } from 'react'
import styled from 'styled-components'

const Btn = styled('button')`
  padding: 10px 20px;
  border-radius: 10px;
  background: #007991;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #78ffd6, #007991);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #78ffd6, #007991); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  outline: none;
  border: none;

`

export default class Button extends Component {

  

  render() {
    return (
      <>
        <Btn className={this.props.class} type={this.props.type}>{this.props.tittle}</Btn>
      </>
    )
  }
}
