import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from '../Table';

test('renders table with width stretched correctly', () => {
  const table = (
    <Table
      width="stretched"
      data={{
        header: ['band', 'singer', 'rhythm guitar', 'lead guitar', 'bass', 'drums', 'keyboard'],
        body: [
          {
            band: 'metallica',
            singer: 'james hatfield',
            'rhythm guitar': 'james hatfield',
            'lead guitar': 'kirk hammet',
            bass: 'robert trujillo',
            drums: 'lars ulrich',
          },
          {
            band: 'slayer',
            singer: 'tom araya',
            'rhythm guitar': 'kerry king',
            'lead guitar': 'gary holt',
            bass: 'tom araya',
            drums: 'paul bostaph',
          },
          {
            band: 'black sabbath',
            singer: 'ozzy osbourne',
            'lead guitar': 'tommy iommi',
            bass: 'geezer butler',
            drums: 'bill ward',
          },
          {
            band: 'queen',
            singer: 'freddy mercury',
            'lead guitar': 'brian may',
            bass: 'john deacon',
            drums: 'roger taylor',
            keyboard: 'freddy mercury',
          },
          {
            band: 'led zeppelin',
            singer: 'robert plant',
            'lead guitar': 'jimmy page',
            bass: 'john paul johns',
            drums: 'bonzo bonham',
            keyboard: 'john paul johns',
          },
          {
            band: 'deep purple',
            singer: 'ian gillan',
            'lead guitar': 'ritchie blackmore',
            bass: 'roger glover',
            drums: 'ian paice',
            keyboard: 'jon lord',
          },
        ],
      }}
    />
  );

  expect(toJson(enzyme.shallow(table))).toMatchSnapshot('enzyme.shallow');
});

test('renders table with width auto correctly', () => {
  const table = (
    <Table
      width="auto"
      data={{
        header: ['band', 'singer', 'rhythm guitar', 'lead guitar', 'bass', 'drums', 'keyboard'],
        body: [
          {
            band: 'metallica',
            singer: 'james hatfield',
            'rhythm guitar': 'james hatfield',
            'lead guitar': 'kirk hammet',
            bass: 'robert trujillo',
            drums: 'lars ulrich',
          },
          {
            band: 'slayer',
            singer: 'tom araya',
            'rhythm guitar': 'kerry king',
            'lead guitar': 'gary holt',
            bass: 'tom araya',
            drums: 'paul bostaph',
          },
          {
            band: 'black sabbath',
            singer: 'ozzy osbourne',
            'lead guitar': 'tommy iommi',
            bass: 'geezer butler',
            drums: 'bill ward',
          },
          {
            band: 'queen',
            singer: 'freddy mercury',
            'lead guitar': 'brian may',
            bass: 'john deacon',
            drums: 'roger taylor',
            keyboard: 'freddy mercury',
          },
          {
            band: 'led zeppelin',
            singer: 'robert plant',
            'lead guitar': 'jimmy page',
            bass: 'john paul johns',
            drums: 'bonzo bonham',
            keyboard: 'john paul johns',
          },
          {
            band: 'deep purple',
            singer: 'ian gillan',
            'lead guitar': 'ritchie blackmore',
            bass: 'roger glover',
            drums: 'ian paice',
            keyboard: 'jon lord',
          },
        ],
      }}
    />
  );

  expect(toJson(enzyme.shallow(table))).toMatchSnapshot('enzyme.shallow');
});

test('renders table with few headers correctly', () => {
  const table = (
    <Table
      width="auto"
      data={{
        header: ['band', 'singer', 'rhythm guitar'],
        body: [
          {
            band: 'metallica',
            singer: 'james hatfield',
            'rhythm guitar': 'james hatfield',
            'lead guitar': 'kirk hammet',
            bass: 'robert trujillo',
            drums: 'lars ulrich',
          },
          {
            band: 'slayer',
            singer: 'tom araya',
            'rhythm guitar': 'kerry king',
            'lead guitar': 'gary holt',
            bass: 'tom araya',
            drums: 'paul bostaph',
          },
          {
            band: 'black sabbath',
            singer: 'ozzy osbourne',
            'lead guitar': 'tommy iommi',
            bass: 'geezer butler',
            drums: 'bill ward',
          },
          {
            band: 'queen',
            singer: 'freddy mercury',
            'lead guitar': 'brian may',
            bass: 'john deacon',
            drums: 'roger taylor',
            keyboard: 'freddy mercury',
          },
          {
            band: 'led zeppelin',
            singer: 'robert plant',
            'lead guitar': 'jimmy page',
            bass: 'john paul johns',
            drums: 'bonzo bonham',
            keyboard: 'john paul johns',
          },
          {
            band: 'deep purple',
            singer: 'ian gillan',
            'lead guitar': 'ritchie blackmore',
            bass: 'roger glover',
            drums: 'ian paice',
            keyboard: 'jon lord',
          },
        ],
      }}
    />
  );

  expect(toJson(enzyme.shallow(table))).toMatchSnapshot('enzyme.shallow');
});
