import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Slide, useScrollTrigger} from '@material-ui/core';
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'white',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    maxWidth: '960px',
  },
  title: {
    margin: 'auto',
    paddingLeft: '30px',
    paddingRight: '30px',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationThickness: '3px',
      textUnderlineOffset: '3px',
    },
  },
  separator: {
    margin: '0',
    color: 'black',
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Scroll to={'home'} smooth={true}>
              <h3>home</h3>
            </Scroll>
          </div>
          <h3 className={classes.separator}>·</h3>
          <div className={classes.title}>
            <Scroll to={'about'} smooth={true}>
              <h3>about</h3>
            </Scroll>
          </div>
          <h3 className={classes.separator}>·</h3>
          <div className={classes.title}>
            <Scroll to={'work'} smooth={true}>
              <h3>work</h3>
            </Scroll>
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
