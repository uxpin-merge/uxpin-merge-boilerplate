/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/FormaButton/FormaButton.jsx',
          'src/components/FormaTabs/FormaTabs.jsx',
          'src/components/Workbench/Workbench.jsx',
          'src/components/WorkbenchHeader/WorkbenchHeader.jsx',

        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'Contentful Wrapped',
};
