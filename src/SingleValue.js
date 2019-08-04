import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

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
