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
  noteType: PropTypes.oneOf(["primary", "positive", "negative", "warning"]),
  noteTitle: PropTypes.string,
  noteText: PropTypes.string,
  hasCloseButton: PropTypes.bool,
};



FormaNote.defaultProps = {
  noteTitle: "Title",
  noteText: "Note text",
};

export { FormaNote as default };
