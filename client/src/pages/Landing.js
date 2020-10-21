import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

import "./Landing.css";
import video from "./coffee.mp4";
import { Button } from "@material-ui/core";
// import { useTransition, animated, useSpring, config } from "react-spring";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    display: "flex",
    justifyContent: "center",
    border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: "white",
    height: "100%",

    fontFamily: 'Dosis, sans-serif'
  },

  button: {
    position: "absolute",
    top: "40%",
    color: "white"
  },
});

const StyledButton = withStyles({
  root: {
    // background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
    opacity: 1,

    color: "white",
    width: 200,
    height: 68,
    padding: "0 30px",

  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Acme, cursive",
    fontSize: 28,
  },
})(Button);



const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
};


const Landing = () => {

  const classes = useStyles();

  //   const fade = useSpring({
  //     transform: isContactOpen
  //       ? `tranlate3d(0,0,0) scale(1)`
  //       : `translate3d(0,0,0) scale(0.01)`,
  //     config: config.slow,
  //   });
  return (
    <motion.div
      // style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className={classes.root}
      transition={pageTransition}
    > <video autoPlay muted loop className="container">
        <source src={video} type="video/mp4" />
      </video>
      <div className={classes.button}>
        <Link to="/calm" style={{ textDecoration: "none" }}>
          <StyledButton>escape</StyledButton>
        </Link>
      </div>


    </motion.div>
  );
};

export default Landing;
