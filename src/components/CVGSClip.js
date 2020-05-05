import React from "react";
import { Component } from "react";
import cvgsclip from "../resources/cvgsclip.mp4";

class CVGSClip extends Component {
  render() {
    return (
      <div>
        <h2>Video Game Store Project</h2>
        <video src={cvgsclip} autoPlay loop controls />
        <p>ASP.NET Core MVC web app for viewing/purchasing games online.
        Cooperative semester-long project with three other team members.</p>
        <p className="bold">Stack: ASP.NET Core, Razor, SQLite</p>
      </div>
    );
  }
}

export default CVGSClip;