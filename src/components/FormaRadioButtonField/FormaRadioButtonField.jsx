import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RadioButtonField } from '@contentful/forma-36-react-components';

function FormaRadioButtonField() {
  const [activeOption, setActiveOption] = React.useState('yes');

  return (
    <div>
      <RadioButtonField
        name="radio option 1"
        id="RadioButton1"
        value="yes"
        checked={activeOption === 'yes'}
        onChange={(e) => {
          setActiveOption(e.target.value);
        }}
        labelText="Radio button checked"
        helpText="Helper text displayed below"
      />
      <RadioButtonField
        name="radio option 2"
        id="RadioButton2"
        value="no"
        checked={activeOption === 'no'}
        onChange={(e) => {
          setActiveOption(e.target.value);
        }}
        labelText="Second option"
        helpText="Helper text displayed below"
      />
    </div>
  );
}


FormaRadioButtonField.propTypes = {
  disabled: PropTypes.bool,
  labelIsLight: PropTypes.bool,
  validationMessage: PropTypes.string,
};

FormaRadioButtonField.defaultProps = {
  checked: true,
  disabled: false,
  labelIsLight: false,
  validationMessage: "validation message"
};

export { FormaRadioButtonField as default };
