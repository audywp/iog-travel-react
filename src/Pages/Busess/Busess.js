import React,{ useState, useEffect } from 'react'
import Config from '../../utils/config'
import './busess.scss'
import Button from '../../Component/Button'

const Busess = () => {


  return(
    <>
    <div className="busess">
      <div className="lineWrap"></div>
      <div className="busess-no">
      <h1>No.</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className="busess-name">
        <h1>Name</h1>
        <ul>
          <li>Damri</li>
          <li>Amer</li>
          <li>Udah</li>
          <li>Malem</li>
          <li>Woy</li>
        </ul>
      </div>

      <div className="busess-sheets">
        <h1>Sheets</h1>
        <ul>
          <h1></h1>
          <li>20</li>
          <li>22</li>
          <li>25</li>
          <li>15</li>
          <li>30</li>
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

export default Busess