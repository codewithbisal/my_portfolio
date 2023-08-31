import React, { Component } from "react";
import Data from "../../assests/svgcode/Data.svg";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img
          src={Data}
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
