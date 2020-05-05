import React from "react";
import { Component } from "react";
import cottagecloudclip from "../resources/cottagecloudclip.mp4";

class CottageCloudClip extends Component {
  render() {
    return (
      <div>
        <h2>Property Rental Platform Project</h2>
        <video autoPlay={true}
        loop={true} src={cottagecloudclip} controls />
        <p>REST API and React web front-end for viewing
        and renting vacation properties. Cooperative semester-long
        project with two other team members.</p>
        <p className="bold">Stack: React + React-Admin, Node.js +
         Loopback, MongoDB</p>
      </div>
    );
  }
}

export default CottageCloudClip;