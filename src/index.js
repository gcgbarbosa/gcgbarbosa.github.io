import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import AboutMe from "./aboutme";
import MiniCV from "./minicv";

export default function GridSite() {
  return (
    <Box my={4}>
      <Container maxWith="xs">
        <Grid
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
      </Container>
    </Box>
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
