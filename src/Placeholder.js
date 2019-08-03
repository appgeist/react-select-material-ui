import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: theme.spacing(1.75),
    bottom: theme.spacing(2),
    fontSize: 16
  }
}));

const Placeholder = ({ innerProps, children }) => {
  const classes = useStyles();
  return (
    <Typography color="textSecondary" className={classes.root} {...innerProps}>
      {children}
    </Typography>
  );
};

Placeholder.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape()
};

Placeholder.defaultProps = {
  innerProps: {}
};

export default Placeholder;
