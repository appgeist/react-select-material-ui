import React from 'react';
import PropTypes from 'prop-types';
import { Chip, makeStyles } from '@material-ui/core';
import { emphasize } from '@material-ui/core/styles';
import { CloseCircle } from 'mdi-material-ui';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.25, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
  }
}));

const MultiValue = ({ children, isFocused, removeProps }) => {
  const classes = useStyles();

  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={clsx(classes.chip, { [classes.chipFocused]: isFocused })}
      onDelete={removeProps.onClick}
      deleteIcon={<CloseCircle {...removeProps} />}
    />
  );
};

MultiValue.propTypes = {
  children: PropTypes.node.isRequired,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired
  }).isRequired
};

export default MultiValue;
