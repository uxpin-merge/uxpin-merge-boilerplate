/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/FormaAsset/FormaAsset.jsx',
          'src/components/FormaButton/FormaButton.jsx',
          'src/components/FormaIcons/FormaIcons.jsx',
          'src/components/FormaSpinner/FormaSpinner.jsx',
          'src/components/FormaTabs/FormaTabs.jsx',
          'src/components/FormaValidationMessage/FormaValidationMessage.jsx',
          'src/components/Workbench/Workbench.jsx',
          'src/components/WorkbenchHeader/WorkbenchHeader.jsx',
          'src/components/TextField/TextField.jsx',

        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'Contentful Wrapped',
};
