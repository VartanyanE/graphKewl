import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "80%",
    color: "linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)",
    background: " linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    color: "linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)",
    fontFamily: "Acme, sans-serif",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.fetch}
          {props.author}
        </Typography>
      </CardContent>
    </Card>
  );
}
