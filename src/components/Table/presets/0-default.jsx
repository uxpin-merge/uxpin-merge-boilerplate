import React from 'react';
import Table from '../Table';

const tableData = {
  body: [
    {
      band: 'metallica',
      bass: 'robert trujillo',
      drums: 'lars ulrich',
      'lead guitar': 'kirk hammet',
      'rhythm guitar': 'james hetfield',
      singer: 'james hetfield',
    },
    {
      band: 'slayer',
      bass: 'tom araya',
      drums: 'paul bostaph',
      'lead guitar': 'gary holt',
      'rhythm guitar': 'kerry king',
      singer: 'tom araya',
    },
    {
      band: 'black sabbath',
      bass: 'geezer butler',
      drums: 'bill ward',
      'lead guitar': 'tommy iommi',
      singer: 'ozzy osbourne',
    },
    {
      band: 'queen',
      bass: 'john deacon',
      drums: 'roger taylor',
      keyboard: 'freddy mercury',
      'lead guitar': 'brian may',
      singer: 'freddy mercury',
    },
    {
      band: 'led zeppelin',
      bass: 'john paul johns',
      drums: 'bonzo bonham',
      keyboard: 'john paul johns',
      'lead guitar': 'jimmy page',
      singer: 'robert plant',
    },
    {
      band: 'deep purple',
      bass: 'roger glover',
      drums: 'ian paice',
      keyboard: 'jon lord',
      'lead guitar': 'ritchie blackmore',
      singer: 'ian gillan',
    },
  ],
  header: ['band', 'singer', 'rhythm guitar', 'lead guitar', 'bass', 'drums', 'keyboard'],
};

export default (
  <Table
    data={tableData}
    uxpId="table1"
    width="auto"
  />
);
