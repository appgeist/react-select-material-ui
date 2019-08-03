import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    'display': 'flex',
    'padding': theme.spacing(1),
    'cursor': 'pointer',
    'color': theme.palette.grey[400],
    'transition': 'color 0.2s',
    '&:hover': {
      color: theme.palette.grey[700]
    }
  },
  rootFocused: {
    color: theme.palette.grey[700]
  }
}));

const ClearIndicator = ({ isFocused, innerProps }) => {
  // console.log(rest);
  const classes = useStyles();
  return (
    <div aria-hidden {...innerProps} className={clsx(classes.root, { [classes.rootFocused]: isFocused })}>
      <Close fontSize="small" />
    </div>
  );
};

ClearIndicator.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  innerProps: PropTypes.shape().isRequired
};

export default ClearIndicator;
