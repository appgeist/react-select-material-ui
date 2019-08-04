import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: theme.spacing(1.85),
    bottom: ({ dense }) => theme.spacing(dense ? 0.85 : 1.85),
    fontSize: 16
  }
}));

const Placeholder = ({
  innerProps,
  children,
  selectProps: {
    TextFieldProps: { margin }
  }
}) => {
  const classes = useStyles({ dense: margin === 'dense' });
  return (
    <Typography color="textSecondary" className={classes.root} {...innerProps}>
      {children}
    </Typography>
  );
};

Placeholder.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape(),
  selectProps: PropTypes.shape({
    TextFieldProps: PropTypes.shape({
      margin: PropTypes.string
    }).isRequired
  }).isRequired
};

Placeholder.defaultProps = {
  innerProps: {}
};

export default Placeholder;
