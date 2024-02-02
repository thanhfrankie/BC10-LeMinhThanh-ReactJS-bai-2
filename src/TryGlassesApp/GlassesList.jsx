import React, { Component } from "react";
import { glassesArr } from "./data";

export default class GlassesList extends Component {
  renderGlassesesList = () => {
    console.log(glassesArr);
    return glassesArr.map((item) => {
      return (
        <div className="col mt-2">
          <button onClick={{}}>
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
    return (
      <div className="container py-3">
        <div className="row">{this.renderGlassesesList()}</div>
      </div>
    );
  }
}
