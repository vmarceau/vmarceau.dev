import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {FaGithub, FaLinkedin, FaUniversity} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    justifyContent: 'center',
    padding: 0,
  },
  item: {
    marginLeft: '15px',
    marginRight: '15px',
  },
  icon: {
    color: 'lightgray',
    '&:hover': {
      color: 'black',
    },
  },
}));

export default function Socials() {
  const classes = useStyles();

  return (
    <div id="socials">
      <ul className={classes.row}>
        <IconContext.Provider value={{size: '36'}}>
          <li key={'linkedin'} className={classes.item}>
            <a href={'https://www.linkedin.com/in/vincentmarceau'} target={'_blank'} rel={'noopener noreferrer'}>
              <FaLinkedin className={classes.icon} />
            </a>
          </li>
          <li key={'github'} className={classes.item}>
            <a href={'https://www.github.com/vmarceau'} target={'_blank'} rel={'noopener noreferrer'}>
              <FaGithub className={classes.icon} />
            </a>
          </li>
          <li key={'scholar'} className={classes.item}>
            <a
              href={'https://scholar.google.ca/citations?user=_wqI44EAAAAJ&hl=en'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              <FaUniversity className={classes.icon} />
            </a>
          </li>
        </IconContext.Provider>
      </ul>
    </div>
  );
}
