import * as PropTypes from 'prop-types';
import * as React from 'react';
import  { Workbench, Icon, Button }  from '@contentful/forma-36-react-components';

const WorkbenchHeader = (props) => (
    <Workbench.Header
     {...props}
      actions={<Button buttonType="muted">{props.buttonLabel}</Button>}
      // description="Lorem Ipsum dolor sit amet."
      icon={<Icon icon={props.icon} />}
     
    />
);

WorkbenchHeader.propTypes = {
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.oneOf(["Star", "Asset", "Calendar", "ArrowUp", "ArrowDown", "ChevronRight"]),
};

WorkbenchHeader.defaultProps = {
  description: "Lorem Ipsum dolor sit amet",
  buttonLabel: "Click",
  title: "Page title",
  icon:"ArrowDown",
  onChange: () => undefined
};

export { WorkbenchHeader as default };
