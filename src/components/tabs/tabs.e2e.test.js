import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs.jsx';

configure({
  adapter: new Adapter(),
});

const mock = {
  children: [<div key="first" title="first-child" className="child">
    <div className="first-child-component"/>
  </div>,
  <div key="second" title="second-child" className="child">
    <div className="second-child-component"/>
  </div>,
  <div key="third" title="third-child" className="child">
    <div className="third-child-component"/>
  </div>],
};

it(`Should change Tab on click`, () => {
  const {children} = mock;
  const tabs = mount(
      <Tabs>
        {children}
      </Tabs>
  );
  const thirdTab = tabs.find(`li.movie-nav__item`).at(2);

  thirdTab.simulate(`click`);
  expect(tabs.find(`div.third-child-component`).length).toBe(1);
});
