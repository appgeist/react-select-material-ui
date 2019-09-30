import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2)
  }
}));

const NoOptionsMessage = ({ children, innerProps }) => {
  const classes = useStyles();
  return (
    <Typography color="textSecondary" className={classes.root} {...innerProps}>
      {children}
    </Typography>
  );
};

NoOptionsMessage.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape()
};

NoOptionsMessage.defaultProps = {
  innerProps: null
};

export default NoOptionsMessage;
