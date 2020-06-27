import React from "react";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import ScholarIcon from '@material-ui/icons/School';

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
      <Box width={1} mb={4} item>
        <Paper>
          <Box pt={4}>
            <Avatar
              className={classes.avatar}
              alt="George Barbosa Photo"
              src={George}
            />
          </Box>
          <Box p={4}>
            <Typography align="center" variant="h3">
              <stronger>George C. G. Barbosa</stronger>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box width={1} mb={4} item>
        <Paper>
          <Box pt={4}>
            <Typography align="center" variant="h3">
              Myself
            </Typography>
          </Box>
          <Box p={4}>
            <Typography align="justify" variant="h5">
                I am currently an intern @lum.ai.
            </Typography>
            <Typography align="justify" variant="h5">
                Working towards my PhD under the supervision of Mihai Surdeanu.
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box width={1} mb={2} item>
        <Paper>
          <Box p={4} pb={0} >
            <Typography align="center" variant="h3">
              Social
            </Typography>
          </Box>
          <Box p={4} display="flex" justifyContent="center">
            <Link href="https://www.facebook.com/ohackgb/">
              <FacebookIcon style={{fontSize: '8vw'}} />
            </Link>
            <Link href="https://www.linkedin.com/in/gcgbarbosa/">
              <LinkedInIcon style={{fontSize: '8vw'}} />
            </Link>
            <Link href="https://github.com/gcgbarbosa">
              <GitIcon style={{fontSize: '8vw'}} />
            </Link>
            <Link href="https://www.instagram.com/gcgbarbosa/">
              <InstagramIcon style={{fontSize: '8vw'}} />
            </Link>
            <Link href="https://scholar.google.com/citations?user=2_H8atkAAAAJ&hl=en">
              <ScholarIcon style={{fontSize: '8vw'}} />
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
