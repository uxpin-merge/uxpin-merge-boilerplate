import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import Icon from '../../Icon/Icon';
import Button from '../Button';

test('renders error Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="error"
      mode="filled">
Test
    </Button>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});

test('renders success Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="success"
      mode="filled">
Test
    </Button>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});


test('renders warning Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="warning"
      mode="filled">
Test
    </Button>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});

test('renders primary Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="primary"
      mode="filled">
Test
    </Button>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});

test('renders secondary Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="secondary"
      mode="filled">
Test
    </Button>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});

test('renders primary ghost Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="primary"
      mode="ghost">
Test
    </Button>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});

test('renders icon Button correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="error"
      icon={<Icon size="s" icon="TickerSvg" />}
      iconDirection="left"
      mode="filled"
    />
  );

  expect(toJson(enzyme.shallow(button))).toMatchSnapshot('enzyme.shallow');
});

test('renders Button with icon correctly', () => {
  const button = (
    <Button
      stretched={false}
      type="error"
      icon={<Icon size="s" icon="TickerSvg" />}
      iconDirection="left"
      mode="filled">
Test
    </Button>
  );

  expect(toJson(enzyme.shallow(button))).toMatchSnapshot('enzyme.shallow');
});
