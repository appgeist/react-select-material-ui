import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

const Option = ({ innerRef, isFocused, isSelected, innerProps, children }) => (
  <MenuItem
    ref={innerRef}
    selected={isFocused}
    component="div"
    style={{
      fontWeight: isSelected ? 500 : 400
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
);

Option.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]),
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired
};

Option.defaultProps = {
  innerRef: null
};

export default Option;
