import React from "react";
import "./index.css";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "center",
    minWidth: "45vw",
    width: "45vw",
    padding: "10px",
    margin: "10px",
  },
  avatar: {
    width: "20vw",
    height: "20vw",
    margin: "0 auto",
  },
  sn: {
    margin: "0 auto",
  },
}));

export default function MiniCV() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box item >
        <Paper className={classes.paper}>
          <Box pt={5}>
            <Typography align="center" variant="h5" component="h5">
              Education
            </Typography>
          </Box>
          <Box p={5} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h6" component="h6">
              <Box fontSize='h6.fontSize' item>
                  University of Arizona
              </Box>
              <Box fontSize='4.fontSize' item>
                Doctor of Philosophy - PhD, Computer Science
              </Box>
              <Box fontSize='subtitle1.fontSize' item>
                  2019-2024
              </Box>
            </Typography>
          </Box>
          <Box p={5} pt={0} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h6" component="h6">
              <Box fontSize='h6.fontSize' item>
                  Federal University of Bahia
              </Box>
              <Box fontSize='4.fontSize' item>
                Master of Science - MS, Computer Science
              </Box>
              <Box fontSize='subtitle1.fontSize' item>
                  2016-2018
              </Box>
            </Typography>
          </Box>
          <Box p={5} pt={0} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h6" component="h6">
              <Box fontSize='h6.fontSize' item>
                  Universidade Estadual do Sudoeste da Bahia
              </Box>
              <Box fontSize='4.fontSize' item>
                Bachelor of Science - BS, Information Systems
              </Box>
              <Box fontSize='subtitle1.fontSize' item>
                  2010-2014
              </Box>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box item >
        <Paper className={classes.paper}>
          <Box pt={5}>
            <Typography align="center" variant="h5" component="h5">
              Last publications
            </Typography>
          </Box>
          <Box p={5} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h6" component="h6">
              <Box fontSize='h6.fontSize' item>
                  University of Arizona
              </Box>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
