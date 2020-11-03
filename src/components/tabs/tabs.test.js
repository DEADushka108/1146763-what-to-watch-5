import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const mock = {
  children: [<div key="test">
    <div/>
  </div>],
};

const noop = () => {};

it(`Should render Tabs component correctly`, () => {
  const {children} = mock;
  const tree = renderer
    .create(
        <Tabs
          activeItem={0}
          onActiveItemChange={noop}
        >
          {children}
        </Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
