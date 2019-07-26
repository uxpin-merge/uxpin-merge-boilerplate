module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/Icon/Icon.js',
          'src/components/Select/Select/Select.js',
          'src/components/Select/SelectItem/SelectItem.js',
          'src/components/Table/Table.js'
        ]
      },
      {
        name: 'Charts',
        include: [
          'src/components/Charts/LineChart/LineChart.js',
          'src/components/Charts/LineMarkChart/LineMarkChart.js',
          'src/components/Charts/MarkChart/MarkChart.js',
          'src/components/Charts/AreaChart/AreaChart.js',
          'src/components/Charts/BarChart/BarChart.js',
          'src/components/Charts/PieChart/PieChart.js'
        ]
      }
    ]
  },
  name: 'UXPin Merge Boilerplate'
};
