import React, { Component } from "react";
import { render } from "react-dom";
import "./Landing.css";
import video from "./rain.mp4";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h1>The Bookking Page</h1>
        <video autoPlay muted loop id="myVideoStop">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Landing;
