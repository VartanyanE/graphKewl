import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { AnimatePresence, motion } from "framer-motion";

import "./Landing.css";
import video from "./rain.mp4";
import { Button } from "@material-ui/core";
import { useTransition, animated, useSpring, config } from "react-spring";

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

    fontFamily: "Indie Flower, cursive",
  },

  button: {
    position: "absolute",
    top: "40%",
  },
});

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",

    borderRadius: 3,
    border: 0,
    color: "black",
    width: 200,
    height: 68,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Indie Flower, cursive",
    fontSize: 28,
  },
})(Button);

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100px",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: "40px",
    y: "0px",
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100px",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
};

const pageStyle = {
  position: "absolute",
};
const Landing = () => {
  useEffect(() => {
    setContactOpen(true);
  });
  const classes = useStyles();
  const [isContactOpen, setContactOpen] = useState(false);
  const fade = useSpring({
    transform: isContactOpen
      ? `tranlate3d(0,0,0) scale(1)`
      : `translate3d(0,0,0) scale(0.01)`,
    config: config.slow,
  });
  return (
    <motion.div
      // style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.root}
      transition={pageTransition}
    >
      <animated.div className={classes.button} style={fade}>
        <Link to="/calm" style={{ textDecoration: "none" }}>
          <StyledButton>escape</StyledButton>
        </Link>
      </animated.div>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Landing;
