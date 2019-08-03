import React from 'react';
import PropTypes from 'prop-types';
import { TextField, makeStyles } from '@material-ui/core';
import InputComponent from './InputComponent';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'flex',
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(0.25),
    height: 'auto'
  }
}));

const Control = ({ children, innerProps, innerRef, selectProps: { TextFieldProps } }) => {
  const classes = useStyles();
  return (
    <TextField
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
};

Control.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.shape({
    TextFieldProps: PropTypes.shape().isRequired
  }).isRequired
};

export default Control;
