/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Camera/Camera.jsx',
          'src/components/CreditCard/CreditCard.jsx',
          'src/components/Greeting/Greeting.jsx',
          'src/components/Icon/Icon.jsx',
          'src/components/MediaPlayer/MediaPlayer.jsx',
          'src/components/Table/Table.jsx',
          'src/components/TrendLine/TrendLine.jsx',
        ],
      },
      {
        name: 'Form',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/Select/Select.jsx',
          'src/components/Select/components/SelectItem/SelectItem.jsx',
          'src/components/TextField/TextField.jsx',
        ],
      },
      {
        name: 'Charts',
        include: [
          'src/components/Charts/*/*.jsx',
          '!src/components/Charts/**/*.styles.js',
          '!src/components/Charts/**/__tests__/*.js',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'UXPin Merge Boilerplate',
};
