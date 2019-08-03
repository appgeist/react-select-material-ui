import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { ChevronDown } from 'mdi-material-ui';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    'display': 'flex',
    'padding': theme.spacing(0.75),
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

const DropdownIndicator = ({ isFocused }) => {
  const classes = useStyles();
  return (
    <div aria-hidden className={clsx(classes.root, { [classes.rootFocused]: isFocused })}>
      <ChevronDown />
    </div>
  );
};

DropdownIndicator.propTypes = {
  isFocused: PropTypes.bool.isRequired
};

export default DropdownIndicator;
