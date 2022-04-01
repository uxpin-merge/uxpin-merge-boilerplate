# UXPin Merge – Experimental Mode Boilerplate Repository

UXPin Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor (https://uxpin.com). The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

To make the first steps in the world of Merge easy, we've prepared this boilerplate repository with examples of components that shows the power of Merge:

- Configurable Button with multiple styling options
- Select with nested components
- Icon with access to dozens of SVG icons
- Table that automatically renders from a provided objects and adds sorting
- 5 animated charts created with React-vis library

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

- Components have to have default exports
- Components need to exist in separate directories
- Only one component is allowed per file and directory e.g. `./src/Button/Button.js`
- You have to add the component to uxpin.config.js file
- You have to prepare presets for every component (temporary restrictions to be replaced by jsx presets)

## Creating presets

Preset is a JSX file that describes components in a structured way.

- For `./src/Button/Button.js` component we require one preset in `./src/Button/presets/0-default.jsx`

Example preset:

```jsx
<Button
  icon={<Icon icon="TickerSvg" size="s" uxpId="button2" />}
  mode="filled"
  size="m"
  stretched
  type="primary"
  uxpId="button"
>
  Let's Merge!
</Button>
```

As you can see we are defining the default props and the structure of the Button component. When dragged onto the UXPin canvas, the initial render of the component will appear with the above structure. One thing to note is that every component set in a preset file must have a unique UXPin ID attribute `uxpId`. This allows Merge to properly render every component and track overrides of components. 

If you would like to learn more about managing JSX presets and Merge integration. Please see our [Merge documentation](https://www.uxpin.com/docs/merge/what-is-uxpin-merge/).
