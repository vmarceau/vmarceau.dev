import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: 'JetBrains Mono',
    fontSize: '1rem',
    color: 'black',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Home />
      <About />
      <Work />
    </div>
  );
}
