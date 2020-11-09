import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const mock = {
  children: [<div key="test">
    <div/>
  </div>],
};

it(`Should render Tabs component correctly`, () => {
  const {children} = mock;
  const tree = renderer
    .create(
        <Tabs>
          {children}
        </Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
