import React from "react";
import {

  Link

} from 'react-router-dom';

import "./Landing.css";
import video from "./rain.mp4";
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    display: "flex",
    justifyContent: 'center',
    border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '100%',

    fontFamily: 'Indie Flower, cursive',

  },

  button: {
    position: 'absolute',
    top: '50%',

  }
});
const Landing = () => {



  const classes = useStyles();
  return (
    <div className={classes.root} >

      < video autoPlay muted loop id="myVideoStop" >
        <source src={video} type="video/mp4" />
      </video >
      <div className={classes.button}>
        <Link to="/calm">
          <Button path="/calm" color="white" >hello world</Button></Link>
      </div>
    </div >
  );
}


export default Landing;
