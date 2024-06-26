import React from 'react';
import { Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../stylesheets/Applications.scss';

export interface CopyrightProps {}

const Copyright: React.FC = React.memo(() => {
  const useStyles = makeStyles(theme => ({
    copyright: {
      fontFamily: 'Roboto',
      position: 'fixed',
      color: '#FAFDF9',
    },
  }));
  const classes = useStyles();
  return (
    <Typography className={classes.copyright} variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chronoslany.com/" target="_blank">
        Team Chronos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
});
export default Copyright;
