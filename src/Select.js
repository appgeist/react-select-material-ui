import React from 'react';
import PropTypes from 'prop-types';
import { NoSsr, TextField, useTheme } from '@material-ui/core';
import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';
import CreatableReactSelect from 'react-select/creatable';
import AsyncCreatableReactSelect from 'react-select/async-creatable';
import Control from './Control';
import Menu from './Menu';
import MultiValue from './MultiValue';
import NoOptionsMessage from './NoOptionsMessage';
import Option from './Option';
import Placeholder from './Placeholder';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import DropdownIndicator from './DropdownIndicator';
import ClearIndicator from './ClearIndicator';
import IndicatorSeparator from './IndicatorSeparator';

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  DropdownIndicator,
  ClearIndicator,
  IndicatorSeparator
};

const Select = ({ id, label, helperText, error, isAsync, isCreatable, ...otherProps }) => {
  const theme = useTheme();
  const selectStyles = {
    input: base => ({
      ...base,
      'color': theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };

  const SelectControl = isAsync
    ? isCreatable
      ? AsyncCreatableReactSelect
      : AsyncReactSelect
    : isCreatable
      ? CreatableReactSelect
      : ReactSelect;

  return (
    <NoSsr
      // prettier-ignore
      fallback={(
        <TextField
          id={id}
          label={label}
          variant="outlined"
          fullWidth
          value="..."
          error={error}
          helperText={helperText}
          disabled
        />
      )}
    >
      <SelectControl
        styles={selectStyles}
        inputId={id}
        TextFieldProps={{
          label,
          fullWidth: true,
          variant: 'outlined',
          error,
          helperText,
          InputLabelProps: {
            htmlFor: id,
            shrink: true
          }
        }}
        components={components}
        {...otherProps}
      />
    </NoSsr>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  isAsync: PropTypes.bool,
  isCreatable: PropTypes.bool,
  helperText: PropTypes.string
};

Select.defaultProps = {
  error: false,
  isAsync: false,
  isCreatable: false,
  helperText: null
};

export default Select;
