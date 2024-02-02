import React, { Component } from 'react'
import "./style.css"

export default class Modal extends Component {
  state = {
    color: "red",
    
  }
  render() {
    return (
      <div className='container model'>
        <div style={{width: "300px", height: "360px",backgroundImage: "url('./glassesImage/model.jpg')",zIndex: 10,backgroundRepeat: "no-repeat", backgroundPosition: "center",backgroundSize: "cover",position:"relative"}}>
          {/* <img style={{ width: "300px" }} src="./glassesImage/model.jpg" alt /> */}
          <div className='glassesTrial'>1</div>
          <div className="imgDesc">123</div>
        </div>
        <div>
        <img style={{width: "300px"}} src="./glassesImage/model.jpg" alt="" />
        </div>

      </div>
    )
  }
}
