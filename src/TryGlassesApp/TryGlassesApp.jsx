import React, { Component } from "react";

import { glassesArr } from "./data";
import "./style.css";

export default class TryGlassesApp extends Component {
  state = {
    url: "",
    name: "",
    desc: ""
  };
  handleChangeGlass = (url, name, desc) => {
    this.setState({
      url: url,
      name: name,
      desc: desc,
    });
  };
  renderGlassesesList = () => {
    console.log(glassesArr);
    return glassesArr.map((item) => {
      return (
        <div className="col mt-2">
          <button onClick={() => this.handleChangeGlass(item.url, item.name, item.desc)}>
            <img
              className=""
              style={{ width: "200px" }}
              src={item.url}
              alt=""
            />
          </button>
        </div>
      );
    });
  };
  render() {
    let url = `./glassesImage/${this.state.url}.jpg`
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('./glassesImage/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container model">
          <div
            style={{
              width: "300px",
              height: "360px",
              backgroundImage: "url('./glassesImage/model.jpg')",
              zIndex: 10,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            {/* <img style={{ width: "300px" }} src="./glassesImage/model.jpg" alt /> */}
            <div className="glassesTrial">
              <img className="glassOnEye" src={this.state.url} alt="" />
            </div>
            <div className="imgDesc">

              <div className="name">{this.state.name }</div>
              <div className="desc">{ this.state.desc}</div>
            </div>
            <div className="opa">
            </div>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="./glassesImage/model.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="container py-3">
          <div className="row">{this.renderGlassesesList()}</div>
        </div>
      </div>
    );
  }
}
