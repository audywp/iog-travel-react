import React, { Component } from 'react'
import '../styles/component/alert.scss'

export default class Alert extends Component {
  
  constructor(props) {
    super(props)

    this.checkAvailable = () => {
      console.log('ok')
    }
  }

  componentDidMount() {
    const getButton = document.querySelector('.toDashboard')
    const getModalButton = document.querySelector('.show-alert button')
    const getModal = document.querySelector('.modal')
    getButton.addEventListener('click', (e) => {
      if (!localStorage.getItem('token')) {
        getModal.style.display = "block";
      } else {
        getModal.style.display = "none";
      }
    })
    getModal.addEventListener('click', () => {
      getModal.style.display = "none";
    })
  }
  
  render() {
    return (
      <>
        <div className='modal'>
          <div className="show-alert">
            <h1>You must login to access this feature!</h1>
            <h2></h2>
            <i className="fas fa-times"></i>
            <button>OK</button>
          </div>
        </div>
      </>
    )
  }
}
