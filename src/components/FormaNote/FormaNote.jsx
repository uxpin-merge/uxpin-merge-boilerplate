import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Note } from '@contentful/forma-36-react-components';


const FormaNote = (props) => (
  <Note {...props}
  title={props.noteTitle}
  >
    {props.noteText}
  </Note>
);


FormaNote.propTypes = {
  /**
  * The type of note being represented
  * @uxpinpropname Type
  */
  noteType: PropTypes.oneOf(["primary", "positive", "negative", "warning"]),

  /**
  * The title of the note
  * @uxpinpropname Title
  */
  noteTitle: PropTypes.string,

   /**
  * The text of the note
  * @uxpinpropname Text
  */
  noteText: PropTypes.string,

   /**
  * If checked: The close Button will be enabled
  * @uxpinpropname Close Button
  */
  hasCloseButton: PropTypes.bool,
};



FormaNote.defaultProps = {
  noteType: "primary",
  noteTitle: "Change Title",
  noteText: "Change Text",
};

export { FormaNote as default };
