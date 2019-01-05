# UXPin Merge – Experimental Mode Boilerplate Repository

UXPin Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor (https://uxpin.com). The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

To make the first steps in the world of Merge easy, we've prepared this boilerplate repository with examples of components that shows the power of Merge:
* Configurable Button with multiple styling options
* Select with nested components
* Icon with access to dozens of SVG icons
* Table that automatically renders from a provided objects and adds sorting
* 5 animated charts created with React-vis library

All the components are built with React.js and styled with Emotion. Styles are using tokens stored in JSON files.

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

## Tests

This repository uses tests created with Jest-Emotion and Enzyme. To run all the test suites use:

```bash
npm test
```

When you're modifying components, you have to generate new snapshots:

```bash
npm test -- -u
```

## Adding new components

Adding components to Merge is no different than creating normal React.js components. Merge accepts any standard approach to React. The only limitations that you should be aware of are:
* Components have to have default exports
* Components need to exist in separate directories
* Only one component is allowed per file and directory e.g. `./src/Button/Button.js`
* You have to add the component to uxpin.config.js file
* You have to prepare presets for every component (temporary restrictions to be replaced by jsx presets)

## Creating presets (temporary requirement)

Preset (to be replaced with JSX presets in the future) is a JSON file that describes components in a structured way.

* For `./src/Button/Button.js` component we require one preset in `./src/Button/presets/0-default.json`
* More presets can be added (not yet supported in the editor) by defining the sort index and readable name in the file name (for example: `100-Button with icon.json`, `200-Icon Button.json`).


Example preset:
```json
{
  "rootId": "select548853352",
  "elements": {
    "select548853352": {
      "name": "Select",
      "props": {
        "width": 300,
        "children": [
          {
            "uxpinPresetElementId": "selectitem2379554241"
          },
          {
            "uxpinPresetElementId": "selectitem230242005"
          },
          {
            "uxpinPresetElementId": "selectitem1081055471"
          }
        ]
      }
    },
    "selectitem2379554241": {
      "name": "SelectItem",
      "props": {
        "children": "Option1"
      }
    },
    "selectitem230242005": {
      "name": "SelectItem",
      "props": {
        "children": "Option2"
      }
    },
    "selectitem1081055471": {
      "props": {
        "children": "Option2"
      }
    }
  }
}

```

As you can see at the top of the structure you need a reference to `rootId`. That can be any string, but to make things easier a good practice is to use name of the element and random integers (easier to read and assures uniqueness). Subsequently, under the `elements` key, you will list all the components that are going to be rendered in Merge. Every component has to be identified by a unique id (root component has to repeat the id inside of the elements key) and has to have a `props` key that lists all the properties (leave empty if component doesn't have any props – `props: {}`).

For components that have other components given as `children` (like the `SelectItem` component in the `Select` presented above) you have to create `"uxpinPresetElementId"` (just like for the root element) and use the id as a reference under `elements` id.

In case of components that accept other components via props other than `children` (like `icon` property in the `Button` below) you have to pass a JSX syntax as a property value:

```json
{
  "rootId": "button4038267449",
  "elements": {
    "button4038267449": {
      "name": "Button",
      "props": {
        "stretched": true,
        "type": "error",
        "icon": "<Icon size=\"s\" icon=\"TickerSvg\"/>",
        "mode": "filled"
      }
    }
  }
}
```
