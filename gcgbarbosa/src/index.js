import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import AboutMe from './aboutme';
import MiniCV from './minicv';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: "50px",
  },
  paper: {
    margin: "10px",
    textAlign: "center",
    color: "gray",
    minWidth: "45vw",
    minHeight: "90vh",
  },
}));


export default function GridSite() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <AboutMe />
        </Grid>
        <Grid item>
          <MiniCV />
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <GridSite />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
