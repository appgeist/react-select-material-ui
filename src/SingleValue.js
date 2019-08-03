import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontSize: 16
  }
});

const SingleValue = ({ innerProps, children }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} {...innerProps}>
      {children}
    </Typography>
  );
};

SingleValue.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape()
};

SingleValue.defaultProps = {
  innerProps: null
};

export default SingleValue;
