import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Note } from '@contentful/forma-36-react-components';

function FormaNote(props) {
  //State variable 'open' set to true
  const [open, setOpen] = React.useState(true);
  //On prop change (re render), set state 'open' to isOpen prop value
  React.useEffect(() => setOpen(props.isOpen), [props]);

  return (
    open &&
    <Note {...props}
      title={props.noteTitle}
      //Change state variable 'open' to false
      onClose={() => setOpen(false)}
    >
      {props.noteText}
    </Note>
  )
}

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

  /**
  * If checked: The component will not be visible
  */
 
  isOpen: PropTypes.bool,

  // onClose: PropTypes.func,
};



FormaNote.defaultProps = {
  noteType: "primary",
  noteTitle: "Short, yet succinct title",
  noteText: "A piece of information that is relevant to the context the user is currently in. ",
  isOpen: true,
  // onClose: () => undefined
};

export { FormaNote as default };
