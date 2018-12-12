module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/Button/Button.js',
          'src/Icon/Icon.js',
          'src/Select/Select/Select.js',
          'src/Select/SelectItem/SelectItem.js',
          'src/Table/Table.js'
        ]
      },
      {
        name: 'Charts',
        include: [
          'src/LineChart/LineChart.js',
          'src/LineMarkChart/LineMarkChart.js',
          'src/MarkChart/MarkChart.js',
          'src/AreaChart/AreaChart.js',
          'src/BarChart/BarChart.js',
          'src/PieChart/PieChart.js'
        ]
      }
    ]
  },
  name: 'UXPin Merge Boilerplate'
};
