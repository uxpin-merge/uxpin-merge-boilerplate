import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Modal } from '@contentful/forma-36-react-components';
import { Button } from '@contentful/forma-36-react-components';
import { propTypes } from 'react-widgets/lib/Calendar';

function FormaModal(props) {
  const [isShown, setShown] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setShown(true)}>{props.buttonText}</Button>
      <Modal isShown={isShown}>
        {() => (
          <React.Fragment>
            <Modal.Header title={props.title} />
            <Modal.Content>Hello from controlled modal window</Modal.Content>
            <Modal.Controls>
              <Button buttonType="positive" onClick={() => setShown(false)}>
                Confirm
              </Button>
              <Button buttonType="muted" onClick={() => setShown(false)}>
                Close
              </Button>
            </Modal.Controls>
          </React.Fragment>
        )}
      </Modal>
    </React.Fragment>
  );
}

FormaModal.propTypes = {
  position: PropTypes.oneOf(["center", "top"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  title: PropTypes.string,
  isShown: PropTypes.bool,
  shouldCloseOnEscapePress: PropTypes.bool,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

FormaModal.defaultProps = {
  title: "Default modal",
  buttonText: "Show modal",
};

export { FormaModal as default };
