import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'stretch',
    width: 1,
    marginTop: ({ dense }) => theme.spacing(dense ? 0.75 : 0.25),
    marginBottom: ({ dense }) => theme.spacing(dense ? 0.75 : 0.25),
    background: theme.palette.grey[400],
    transition: 'background 0.2s'
  },
  rootFocused: {
    background: theme.palette.grey[700]
  }
}));

const IndicatorSeparator = ({
  isFocused,
  selectProps: {
    TextFieldProps: { margin }
  }
}) => {
  const classes = useStyles({ dense: margin === 'dense' });
  return <span className={clsx(classes.root, { [classes.rootFocused]: isFocused })} />;
};

IndicatorSeparator.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  selectProps: PropTypes.shape({
    TextFieldProps: PropTypes.shape({
      margin: PropTypes.string
    }).isRequired
  }).isRequired
};

export default IndicatorSeparator;
