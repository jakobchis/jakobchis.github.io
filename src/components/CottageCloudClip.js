import React from "react";
import { Component } from "react";
import cottagecloudclip from "../resources/cottagecloudclip.webm";

class CottageCloudClip extends Component {
  render() {
    return (
      <div>
        <video width="640" height="640" autoplay="true" loop="true" src={cottagecloudclip} />
      </div>
    );
  }
}

export default CottageCloudClip;