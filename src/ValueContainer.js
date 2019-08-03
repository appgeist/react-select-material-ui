import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  }
});

const ValueContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

ValueContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValueContainer;
