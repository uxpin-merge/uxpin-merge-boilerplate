import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from '@contentful/forma-36-react-components';
const buttonIcons = [
  'Heading',
  'ArrowDown',
  'ArrowDownTrimmed',
  'ArrowUp',
  'ArrowUpTrimmed',
  'Asset',
  'AssetTrimmed',
  'Calendar',
  'ChatBubble',
  'ChatBubbleTrimmed',
  'CheckCircle',
  'CheckCircleTrimmed',
  'ChevronDown',
  'ChevronDownTrimmed',
  'ChevronLeft',
  'ChevronLeftTrimmed',
  'ChevronRight',
  'ChevronRightTrimmed',
  'ChevronUp',
  'ChevronUpTrimmed',
  'Clock',
  'ClockTrimmed',
  'Close',
  'CloseTrimmed',
  'CloudUpload',
  'Code',
  'CodeTrimmed',
  'Copy',
  'CopyTrimmed',
  'Cycle',
  'CycleTrimmed',
  'Delete',
  'DeleteTrimmed',
  'Done',
  'DoubleArrow',
  'Download',
  'DownloadTrimmed',
  'Drag',
  'DragTrimmed',
  'Edit',
  'EditTrimmed',
  'EmbeddedEntryBlock',
  'EmbeddedEntryBlockTrimmed',
  'EmbeddedEntryInline',
  'EmbeddedEntryInlineTrimmed',
  'Entry',
  'EntryTrimmed',
  'Environment',
  'EnvironmentAlias',
  'ErrorCircle',
  'ErrorCircleOutline',
  'ErrorCircleTrimmed',
  'ExternalLink',
  'ExternalLinkTrimmed',
  'FaceHappy',
  'FaceHappyTrimmed',
  'Filter',
  'FilterTrimmed',
  'Folder',
  'FolderCreate',
  'FolderCreateTrimmed',
  'FolderOpen',
  'FolderOpenTrimmed',
  'FolderTrimmed',
  'FormatBold',
  'FormatBoldTrimmed',
  'FormatItalic',
  'FormatItalicTrimmed',
  'FormatUnderlined',
  'FormatUnderlinedTrimmed',
  'Gift',
  'HeadingOne',
  'HeadingOneTrimmed',
  'HeadingTrimmed',
  'HeadingTwo',
  'HeadingTwoTrimmed',
  'HelpCircle',
  'HelpCircleInverted',
  'HelpCircleTrimmed',
  'HorizontalRule',
  'HorizontalRuleTrimmed',
  'InfoCircle',
  'InfoCircleTrimmed',
  'Language',
  'Link',
  'LinkAlternate',
  'LinkTrimmed',
  'ListBulleted',
  'ListBulletedTrimmed',
  'ListNumbered',
  'ListNumberedTrimmed',
  'Lock',
  'LockTrimmed',
  'Logout',
  'LooksOne',
  'LooksOneTrimmed',
  'LooksTwo',
  'LooksTwoTrimmed',
  'Menu',
  'MenuTrimmed',
  'Minus',
  'MoreHorizontal',
  'MoreHorizontalTrimmed',
  'MoreVertical',
  'MoreVerticalTrimmed',
  'Person',
  'Plus',
  'PlusCircle',
  'PlusCircleTrimmed',
  'PlusTrimmed',
  'Preview',
  'Quote',
  'QuoteTrimmed',
  'Receipt',
  'ReceiptTrimmed',
  'References',
  'Release',
  'ReleaseTrimmed',
  'Search',
  'SearchTrimmed',
  'Settings',
  'SettingsTrimmed',
  'ShoppingCart',
  'ShoppingCartTrimmed',
  'Star',
  'StarTrimmed',
  'Subscript',
  'SubscriptTrimmed',
  'Superscript',
  'SuperscriptTrimmed',
  'Tags',
  'Text',
  'TextTrimmed',
  'ThumbDown',
  'ThumbDownTrimmed',
  'ThumbUp',
  'ThumbUpTrimmed',
  'Users',
  'UsersTrimmed',
  'Warning',
  'WarningTrimmed',
  'Workflows'
]
const FormaButton = (props) => (
  <Button {...props}>
    {props.label}
  </Button>
);


FormaButton.propTypes = {
  /**
   * Button text
   * Below we change prop name in UXPin
   * @uxpinpropname  Text
   */
  label: PropTypes.string,
  /**
   * Below we change prop name in UXPin
   * @uxpinpropname  Variant
   */
  buttonType: PropTypes.oneOf(["primary", "secondary", "positive", "negative"]),

  /**
   * Button size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * Select an icon for inside the button
   */
  icon: PropTypes.oneOf(buttonIcons),

  /**
   * A URL to link to
   */
  href: PropTypes.string,

  /**
   * A target where the link will open
   */
  target: PropTypes.string,

  /**
   * If checked: The button will stretch to fill available space
   * @uxpinpropname Full width
   */
   isFullWidth: PropTypes.bool,

  /**
   * If checked: The button will be disabled
   */
  disabled: PropTypes.bool,

  /**
  * If checked: Button will have loading spinner
  */
  loading: PropTypes.bool,

  /**
   * If checked: Button will have have a dropdown indication icon
   * Below we change prop name in UXPin
   * @uxpinpropname Dropdown
   */
  indicateDropdown: PropTypes.bool,
  
  /**
   * OnClick event 
   */
  onClick: PropTypes.func,

  /**
   * OnBlur event 
   */
  onBlur: PropTypes.func,
};


FormaButton.defaultProps = {
  label: "Button",
  buttonType: "primary",
  size: "medium",
  icon: null,
  onChange: () => undefined
};

export { FormaButton as default };





