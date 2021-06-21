import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Pill, Icon } from '@contentful/forma-36-react-components';

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
function FormaPill(props) {
  const { draggable, closeable, dragIcon, ...other } = props;
  return (
    <Pill
      {...other}
      onClose={
        props.closeable
          // If closeable prop = true
          ? props.onClose
          //else
          : null
      }
      onDrag={
        props.draggable
          // If draggable prop = true
          ? props.onDrag
          //else
          : null
      }
      dragHandleComponent={
        // If dragIcon has been specified
        dragIcon && (
          <Icon
            icon={dragIcon}
            // color="positive"
            style={{ margin: "9px 0px 0px 10px" }}
          />)
      }
    />
  )
}


FormaPill.propTypes = {
  /**
  * The text to display in the pill.
  * */
  label: PropTypes.string,
  /**
  * The pill variant.
  * */
  variant: PropTypes.oneOf(["deleted", "active", "idle"]),
  /**
  * If checked: Displays drag icon.
  * */
  draggable: PropTypes.bool,
  /**
  * Replace default drag icon
  * */
  dragIcon: PropTypes.oneOf(buttonIcons),
  /**
  * @uxpinignoreprop
  */
  onDrag: PropTypes.func,
  /**
  * @uxpinignoreprop
  */
  dragHandleComponent: PropTypes.node,
  /**
  * If checked: Displays close icon.
  * */
  closeable: PropTypes.bool,
  /**
  * onClose function
  * */
  onClose: PropTypes.func,

};


FormaPill.defaultProps = {
  label: "I am a pill",
  variant: "idle",
  dragIcon: null,
  onDrag: () => undefined,
  onClose: () => undefined
};

export { FormaPill as default };
