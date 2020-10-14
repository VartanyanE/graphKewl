import React, { Component } from "react";
import { render } from "react-dom";
import "./Landing.css";
import video from "./rain.mp4";
import { Button } from '@material-ui/core';

class Landing extends Component {
  render() {
    return (
      <div className="container">

        <video autoPlay muted loop id="myVideoStop">
          <source src={video} type="video/mp4" />
        </video>
        <Button color="primary">Hello World</Button>
      </div>
    );
  }
}

export default Landing;
