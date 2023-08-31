import React, { Component } from "react";
import Web from "../../assests/svgcode/Web.svg";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img
          src={Web}
          width="600"
          height="400"
          margin-bottom="800px"
          margin-top="800px"
          alt="Example"
        />
      </div>
    );
  }
}
