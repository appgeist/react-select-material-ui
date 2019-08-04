import * as React from 'react';
import { Props as ReactSelectProps } from 'react-select/base';
import { Props as AsyncReactSelectProps } from 'react-select/async';
import { Props as CreatableReactSelectProps } from 'react-select/creatable';

type BaseProps = ReactSelectProps<OptionType> &
  AsyncReactSelectProps<OptionType> &
  CreatableReactSelectProps<OptionType>;

export interface SelectProps extends React.Props<Select>, BaseProps {
  id?: string;
  label?: string;
  margin?: 'none' | 'normal' | 'dense';
  error?: boolean;
  helperText?: string;
  isAsync?: boolean;
  isCreatable?: boolean;
}

declare class Select extends React.Component<SelectProps> {}

export default Select;
