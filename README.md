# UXPin Merge – Experimental Mode Boilerplate Repository

UXPin Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor (https://uxpin.com). The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

To make the first steps in the world of Merge easy, we've prepared this boilerplate repository with examples of components that shows the power of Merge:
* Configurable Button with multiple styling options
* Select with nested components
* Icon with access to dozens of SVG icons
* Table that automatically renders from a provided objects and adds sorting
* 5 animated charts created with React-vis library

All the components are built with React.js and styled with Emotion. Styles are using tokens stored in JSON files.

To learn more about Merge – visit [our wiki](https://wikiuxpin.atlassian.net/wiki/spaces/MA/overview)

## Installation

This boilerplate needs node and npm installed to run. Once you're ready clone the repository and install all the dependencies (`npm install`).

## What is Merge Experimental Mode
![alt text](https://preview.ibb.co/fsq20L/merge-exp.png)

Merge Experimental Mode let's you render your React.js components in a dev version of UXPin Design Editor directly from your local environment. You can test your components and see how they're going to behave in UXPin Design Editor!

## Rendering Components in the browser

Among the dependencies of this boilerplate you'll find `uxpin-merge` this tool prepares components for integration with UXPin. It has a built in development server that you can use to see the rendered components in the browser. To start the dev server use the following command:

```bash
npm start
```

When you're changing anything in the components files and you want to re-render components, don't forget to kill the process. Otherwise you'll get a `ELIFECYCLE` error. A handy way to kill all the node processes including the dev server is to run in your terminal:

```bash
killall -9 node
```

## Adding new components

Adding components to Merge is no different than creating normal React.js components. Merge accepts any standard approach to React. The only limitations that you should be aware of are:
* Components have to have default exports
* Components need to exist in separate directories
* Only one component is allowed per file and directory e.g. `./src/Button/Button.js`
* You have to add the component to uxpin.config.js file
 * You have to prepare a default preset for every component

Every component has to be referenced in UXPin Merge Config file [`./uxpin.config.js`](https://wikiuxpin.atlassian.net/wiki/spaces/MA/pages/665714725/UXPin+Merge+Config+File).

## Authoring JSX Presets

Merge requires JSX presets to be stored in the presets subdirectory of every component. Why? Presets are used to render the initial configuration of every component. Merge needs to know which composition of properties (including children) should be rendered by default. This composition will be rendered by default whenever you, or anyone on your team, drag & drops component on the canvas in UXPin editor.

A typical preset looks like this: 


```
import React from 'react';
import Button from '../Button';
 
export default (
    <Button         
        uxpId="button1"
        icon={'<Icon icon=\'TickerSvg\' size=\'s\' />'}
        mode="filled"
        size="s"
        stretched
        type="error"
    >
        Merge!
    </Button>
);
```

At the top of the file you have to import React library and all the components that you want to represent in the preset. In the export default() part of the preset place the JSX code representing the desired, default, composition of your component. JSX representation of every component, apart from the usual configuration of properties, must have a unique UXPin ID attribute – uxpId. uxpId lets Merge properly render every component and track overrides of components (shall that happen in the future). 


Component IDs and Nested Components

Merge JSX presets can represent complex, nested, structures of components. In cases like this, it's very important to remember that all uxpId attributes have to hold unique values. In a given preset two components cannot have the same uxpId. Other than that creating presets for nested structures works just like composing JSX code in React.js components. You have to import all the components and create the full structure in export default() directive. 

```
import React from 'react';
import SelectItem from '../../SelectItem/SelectItem';
import Select from '../Select';
 
export default (
  <Select uxpId="select1">
    <SelectItem uxpId="select.item.1">Option1</SelectItem>
    <SelectItem uxpId="select.item.2">Option2</SelectItem>
    <SelectItem uxpId="select.item.3">Option3</SelectItem>
  </Select>
);
```

When choosing name for uxpId for components, think about the role they're playing. In the future you may want to automatically replace one nested component with another one (say, a Button has just been deprecated and replaced by ButtonNew). In that case, keeping the same uxpId will allow Merge to automatically update all designs with the new component.

Properties Requirements
Content of all the properties in JSX presets must be serializable as JSON. You may build custom functions and manipulate data in the preset file, but the end result must be serializable. 

For example, the following JSX preset is valid:

```
import React from 'react';
import Button from '../Select';
 
const customFunction = () => "HelloWorld";
 
export default (
  <Button
    uxpId="signup1"
    size="large"
    custom={customFunction()}
  >
    Signup Now!
  </Button>
);
```

While this preset is incorrect (passing a function through props is currently unsupported):


```
import React from 'react';
import Button from '../Select';
 
const customFunction = () => "HelloWorld";
 
export default (
  <Button
    uxpId="signup1"
    size="large"
    custom={customFunction}
  >
    Signup Now!
  </Button>
);
```

In preset files you can easily import and modify data sets to be used by your component. Take this example:

```
import React from 'react';
import Table from '../Table';
 
const tableData = {
  header: ['band', 'singer', 'rhythm guitar', 'lead guitar', 'bass', 'drums', 'keyboard'],
  body: [
    {
      band: 'metallica',
      singer: 'james hetfield',
      'rhythm guitar': 'james hetfield',
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
};
 
export default (
  <Table
    data={tableData}
    uxpId="table1"
    width="stretched"
  />
);
```

This is a perfectly valid JSX preset! And things get even better – your data can be imported from an external JS or JSON file.


If you want to pass another component via props, you have to pass it as a string. _This is a temporary restriction._ We're working on removing it.

Merge will automatically transform it to a full component upon rendering. Take a look at property icon in this component preset:


```
import React from 'react';
import Button from '../Button';
 
 
export default (
    <Button         
        uxpId="button1"
        icon={'<Icon icon=\'TickerSvg\' size=\'s\' />'}
        mode="filled"
        size="s"
        stretched
        type="error"
    >
        Merge!
    </Button>
);
```

Merge Presets are very powerful and with handling this power comes a lot of responsibility! Please remember that changes in preset will update design, unless properties were overridden in a particular project in UXPin (warning). 

Learne more about [JSX Presets in Merge Wiki](https://wikiuxpin.atlassian.net/wiki/spaces/MA/pages/665747488/Authoring+and+Managing+JSX+Presets)

## CI Integration

The recommended way to send your React.js components to your production UXPin account is via integration with Continues Integration server (Circle CI, Travis...). 

To start the integration:

1. go to your UXPin account,
2. enter UXPin design editor,
3. create a new library,
4. select option "import React components"
5. copy the Auth token (🚨do not share it with anyone and do not place it in any files checked into git repository. This token provides direct access to the library on your account)

![alt text](https://i.ibb.co/DGzrnWY/merge-ci-1.gif "Merge CI Integration")

Once you obtained the Auth Token, go to your CI app, start a project tracking your design system repository (if you haven't yet) and add a new environment variable UXPIN_AUTH_TOKEN with value set to your Auth token copied from your UXPin account
In the config of your CI server add a new step and run the following command (adjust attributes where necessary): 

```
./node_modules/.bin/uxpin-merge push --webpack-config ./webpack.config.js --wrapper ./src/Wrapper/UXPinWrapper.js
```

The simplest config file (for CircleCI) looks like this:

```
jobs:
  build:
    docker:
      - image: circleci/node:10.15-stretch-browsers
    working_directory: ~/project/
    steps:
      - checkout
      - run:
          name: "Install dependencies"
          command: npm install
      - run:
          name: 'Push to UXPin'
          command: ./node_modules/.bin/uxpin-merge push --webpack-config ./webpack.config.js --wrapper ./src/Wrapper/UXPinWrapper.js
```          

An alternative to CI Server integration is one time push. This option should be used only if you're not planning frequent updates of components. Open your terminal and type:

```
./node_modules/.bin/uxpin-merge push --webpack-config ./webpack.config.js --wrapper ./src/Wrapper/UXPinWrapper.js --token "YOUR_AUTH_TOKEN"
```

## Tests

This repository uses tests created with Jest-Emotion and Enzyme. To run all the test suites use:

```bash
npm test
```

When you're modifying components, you have to generate new snapshots:

```bash
npm test -- -u
```

