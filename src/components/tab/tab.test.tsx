import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab';

const mock = {
  children: <div/>,
};

it(`Should render Tab component correctly`, () => {
  const {children} = mock;
  const tree = renderer
    .create(
        <Tab>{children}</Tab>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
