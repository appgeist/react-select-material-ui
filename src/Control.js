import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import InputComponent from './InputComponent';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'flex',
    padding: ({ dense }) => {
      const verticalPadding = dense ? 0.5 : 1.25;
      return theme.spacing(verticalPadding, 0.25, verticalPadding, 1.75);
    },
    height: 'auto',
    minHeight: 36
  }
}));

const Control = ({ children, innerProps, innerRef, selectProps: { TextFieldProps } }) => {
  const classes = useStyles({ dense: TextFieldProps.margin === 'dense' });
  return (
    <TextField
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
};

Control.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.shape({
    TextFieldProps: PropTypes.shape({
      margin: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Control;
