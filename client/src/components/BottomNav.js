import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: " linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)",
    fontFamily: "Indie Flower, cursive",
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        onClick={props.compliment}
        label="Compliment Me"
        icon={<ThumbUpIcon />}
      />
      <BottomNavigationAction
        onClick={props.joke}
        label="Tell Me A Joke"
        icon={<InsertEmoticonIcon />}
      />
      <BottomNavigationAction
        onClick={props.horoscope}
        label="Horoscope"
        icon={<VisibilityIcon />}
      />
    </BottomNavigation>
  );
}
