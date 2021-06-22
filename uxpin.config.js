/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/FormaAsset/FormaAsset.jsx',
          'src/components/FormaButton/FormaButton.jsx',
          'src/components/FormaCheckbox/FormaCheckbox.jsx',
          'src/components/FormaCopyButton/FormaCopyButton.jsx',
          'src/components/FormaDropdown/FormaDropdown.jsx',
          'src/components/FormaDropdownList/FormaDropdownlist.jsx',
          'src/components/FormaDropdownListItem/FormaDropDownListItem.jsx',
          'src/components/FormaEntityListItem/FormaEntityListItem.jsx',
          'src/components/FormaIcons/FormaIcons.jsx',
          'src/components/FormaIllustration/FormaIllustration.jsx',
          'src/components/FormaPill/FormaPill.jsx',
          'src/components/FormaRadioButton/FormaRadioButton.jsx',
          'src/components/FormaSpinner/FormaSpinner.jsx',
          'src/components/FormaSwitch/FormaSwitch.jsx',
          'src/components/FormaTabs/FormaTabs.jsx',
          'src/components/FormaTextLink/FormaTextLink.jsx',
          'src/components/FormaTooltip/FormaTooltip.jsx',
          'src/components/FormaValidationMessage/FormaValidationMessage.jsx',
          'src/components/Workbench/Workbench.jsx',
          'src/components/WorkbenchHeader/WorkbenchHeader.jsx',
          'src/components/TextField/TextField.jsx',
          'src/components/Note/Note.jsx',
          'src/components/Tag/Tag.jsx',
          'src/components/FormaTooltip/FormaTooltip.jsx',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'Contentful Wrapped',
};
