import * as PropTypes from 'prop-types';
import * as React from 'react';
import { TextField } from '@contentful/forma-36-react-components';


function FormaTextField(props) {
  const { placeholder, maxLength, disabled, ...other } = props;
  return (
    <TextField {...other} textInputProps={{ placeholder, maxLength, disabled }}>
      {props.children}
    </TextField>
  )
};


FormaTextField.propTypes = {
  /**
  * The text for the label of the input element
  * */
  labelText: PropTypes.string,

  /**
   * Placeholder text for the input element
   */
  placeholder: PropTypes.string,

  /** 
   * The text value for the input element
   * @uxpinignoreprop
   * @uxpinpropname input value
   * */  
  value: PropTypes.string,

  /** 
   * The id for the input element
   * @uxpinignoreprop
   * @uxpinpropname input id
   * */  
  id: PropTypes.string,

  /** 
   * The form related name for the input element
   * @uxpinignoreprop
   * @uxpinpropname input name
   * */  
  name: PropTypes.string,

  /**
   * If checked: The input element requires completion
   */
  required: PropTypes.bool,

  /**
   * If checked: Displays current and max character count
   */
  countCharacters: PropTypes.bool,

  /**
   * If checked: Displays the maximum characters allowed to be entered in the input element
   * Only works in preview mode
   */
  maxLength: PropTypes.number,

  /**
   * If checked: Changes input element from TEXTFIELD to TEXTAREA
   */
  textarea: PropTypes.bool,

  /**
   * Help text for the input element
   */
  helpText: PropTypes.string,


  /**
   * Validation message for the input element
   */
  validationMessage: PropTypes.string,

  /**
   * If checked: The input element will be disabled
   */
  disabled: PropTypes.bool,

  /**
  * onChange function
  * */
  onChange: PropTypes.func,

  /**
  * onBlur function
  * */
  onBlur: PropTypes.func,

  /**
  * onFocus function
  * */
  onFocus: PropTypes.func,
};


FormaTextField.defaultProps = {
 labelText: "Label Text prop",
 placeholder: "Placeholder prop",
 required: true,
 countCharacters: true,
 maxLength: 100,
 helpText: "Help Text prop",
 validationMessage: "Validation Message prop",
};

export { FormaTextField as default };
