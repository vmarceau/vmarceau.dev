import {Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
import me from '../assets/images/me.png';
import Appbar from './Appbar';
import DownButton from './DownButton';
import Socials from './Socials';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    textAlign: 'center',
    maxWidth: '640px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  image: {
    maxWidth: '200px',
  },
  subtitle: {
    fontSize: '1rem',
  },
}));
export default function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="home">
      <Appbar />

      <Fade in={checked} {...(checked ? {timeout: 1000} : {})}>
        <div className={classes.titleContainer}>
          <img alt={'me'} className={classes.image} src={me} />
          <h2>Hi, I{"'"}m Vincent Marceau</h2>
          <p className={classes.subtitle}>
            I live in Québec, Canada and currently work as a software engineer at Auth0 (Okta)
          </p>

          <Socials />

          <DownButton to={'about'} />
        </div>
      </Fade>
    </div>
  );
}
