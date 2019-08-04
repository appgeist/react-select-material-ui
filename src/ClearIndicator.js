import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SvgIcon from '@material-ui/core/SvgIcon';
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
      <SvgIcon fontSize="small">
        <path
          // eslint-disable-next-line max-len
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </SvgIcon>
    </div>
  );
};

ClearIndicator.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  innerProps: PropTypes.shape().isRequired
};

export default ClearIndicator;
