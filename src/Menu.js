import React from 'react';
import PropTypes from 'prop-types';
import { Paper, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    zIndex: 2,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  withHelperText: {
    marginTop: theme.spacing(-1.5)
  }
}));

const Menu = ({
  innerProps,
  children,
  selectProps: {
    TextFieldProps: { helperText }
  }
}) => {
  const classes = useStyles();
  return (
    <Paper square className={clsx(classes.root, { [classes.withHelperText]: helperText })} {...innerProps}>
      {children}
    </Paper>
  );
};

Menu.propTypes = {
  innerProps: PropTypes.shape().isRequired,
  children: PropTypes.element.isRequired,
  selectProps: PropTypes.shape({
    TextFieldProps: PropTypes.shape({
      helperText: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Menu;
