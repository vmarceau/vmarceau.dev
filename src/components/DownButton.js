import {IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React from 'react';
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '10px',
  },
  down: {
    color: 'black',
    fontSize: '4rem',
  },
}));

function Down({to}) {
  const classes = useStyles();

  return (
    <div id="down">
      <Scroll to={to} smooth={true}>
        <IconButton className={classes.button}>
          <ExpandMoreIcon className={classes.down} />
        </IconButton>
      </Scroll>
    </div>
  );
}

Down.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Down;
