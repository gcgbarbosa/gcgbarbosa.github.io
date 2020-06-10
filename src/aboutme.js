import React from "react";
import "./index.css";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import George from './gcgbarbosa.jpg'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "50%",
    height: "50%",
    margin: "0 auto",
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={1} mb={5} item>
        <Paper>
          <Box pt={5}>
            <Avatar
              className={classes.avatar}
              alt="George Barbosa Photo"
              src={George}
            />
          </Box>
          <Box p={5}>
            <Typography align="center" variant="h2" component="h1">
              George C. G. Barbosa
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box width={1} mb={5} item>
        <Paper>
          <Box pt={5}>
            <Typography align="center" variant="h3" component="h5">
              About me?
            </Typography>
          </Box>
          <Box p={5}>
            <Typography align="center" variant="body1" component="body1">
              Experienced Developer with a demonstrated history of working in
              research. Skilled in various programming languages, such as
              Python, C, Java, and Scala. Proficient with many BigData tools,
              such as Spark and other tools in the Hadoop Ecosystem. Strong
              research professional with an MS in Computer Science with a focus
              in Natural Language Processing (NLP) from the Federal University
              of Bahia. Currently working on Deep Learning applied to NLP.
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box width={1} item>
        <Paper>
          <Box pt={5}>
            <Typography align="center" variant="h3" component="h5">
              Social Networks
            </Typography>
          </Box>
          <Box p={5} display="flex" justifyContent="center">
            <FacebookIcon style={{fontSize: 100}} />
            <LinkedInIcon style={{fontSize: 100}} />
            <GitIcon style={{fontSize: 100}} />
            <InstagramIcon style={{fontSize: 100}} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
