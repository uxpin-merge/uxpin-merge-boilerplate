module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
<<<<<<< HEAD
          'src/Button/Button.js',
          'src/ButtonRadek/ButtonRadek.js',
          'src/Icon/Icon.js',
          'src/Select/Select/Select.js',
          'src/Select/SelectItem/SelectItem.js',
          'src/Table/Table.js'
        ]
=======
          'src/components/Button/Button.js',
          'src/components/Greeting/Greeting.js',
          'src/components/Icon/Icon.js',
          'src/components/Select/Select.js',
          'src/components/Select/components/SelectItem/SelectItem.js',
          'src/components/Table/Table.js',
        ],
>>>>>>> upstream/master
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
