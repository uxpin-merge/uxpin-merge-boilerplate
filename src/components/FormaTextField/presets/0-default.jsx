import React from 'react';
import FormaTextField from '../FormaTextField';

export default (
  <FormaTextField
    uxpId="TextField-1"
    labelText="Label Text prop"
    placeholder="Placeholder prop"
    required={true}
    countCharacters={true}
    maxLength={100}
    helpText="Help Text prop"
    validationMessage="Validation Message prop"
  />
);