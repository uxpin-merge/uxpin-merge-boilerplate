module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/Greeting/Greeting.js',
          'src/components/Icon/Icon.js',
          'src/components/Select/Select.js',
          'src/components/Select/components/SelectItem/SelectItem.js',
          'src/components/Table/Table.js',
          'src/components/ReactTable/ReactTable.js',
          'src/components/ReactTableEditable/ReactTableEditable.js',
          'src/components/ReactTableSorting/ReactTableSorting.js',
        ],
      },
      {
        name: 'Charts',
        include: [
          'src/components/Charts/**/*.js',
          '!src/components/Charts/**/*.styles.js',
          '!src/components/Charts/**/__tests__/*.js',
        ],
      },
    ],
  },
  name: 'UXPin Merge Boilerplate',
};
