import React from "react";
import { Component } from "react";
import cvgsclip from "../resources/cvgsclip.webm";

class CVGSClip extends Component {
  render() {
    return (
      <div>
        <h2>Video Game Store Project</h2>
        <video autoPlay={true}
        loop={true} src={cvgsclip} />
        <p>ASP.NET Core MVC web app for viewing/purchasing games online.
        Cooperative semester-long project with three other team members.</p>
        <p className="bold">Stack: ASP.NET Core, Razor, SQLite</p>
      </div>
    );
  }
}

export default CVGSClip;