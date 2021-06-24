import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Modal } from '@contentful/forma-36-react-components';
import { Button } from '@contentful/forma-36-react-components';

function FormaModal(props) {
  const [isShown, setShown] = React.useState(false);
  React.useEffect(() => setShown(props.isShown), [props]);

  return (
    <React.Fragment>
      <Button onClick={() => setShown(true)}>{props.buttonText}</Button>
      <Modal isShown={isShown}>
        {() => (
          <React.Fragment>
            <Modal.Header title={props.title} />
            <Modal.Content>{props.content}</Modal.Content>
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
  content: PropTypes.string,
  shouldCloseOnEscapePress: PropTypes.bool,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

FormaModal.defaultProps = {
  isShown: false,
  title: "Default modal",
  buttonText: "Show modal",
  content: "Hello from controlled modal window",
};

export { FormaModal as default };
