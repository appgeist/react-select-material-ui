import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: 'stretch',
    width: 1,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    background: theme.palette.grey[400],
    transition: 'background 0.2s'
  },
  rootFocused: {
    background: theme.palette.grey[700]
  }
}));

const IndicatorSeparator = ({ isFocused }) => {
  const classes = useStyles();
  return <span className={clsx(classes.root, { [classes.rootFocused]: isFocused })} />;
};

IndicatorSeparator.propTypes = {
  isFocused: PropTypes.bool.isRequired
};

export default IndicatorSeparator;
