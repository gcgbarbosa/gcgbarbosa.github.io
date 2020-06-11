import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import AboutMe from "./aboutme";
import MiniCV from "./minicv";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
  },
  grid: {
    minHeight: "90vh",
    padding: theme.spacing(2),
  },
}));

export default function GridSite() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        container
      >
        <Grid xs={12} sm={6} item>
          <AboutMe />
        </Grid>
        <Grid xs={12} sm={6} item>
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
