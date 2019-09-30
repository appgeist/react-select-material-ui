import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SvgIcon from '@material-ui/core/SvgIcon';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
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
      <SvgIcon>
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </SvgIcon>
    </div>
  );
};

DropdownIndicator.propTypes = {
  isFocused: PropTypes.bool.isRequired
};

export default DropdownIndicator;
