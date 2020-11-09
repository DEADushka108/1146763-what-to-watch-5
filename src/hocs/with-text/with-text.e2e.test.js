import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withText from './with-text.jsx';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withText(MockComponent);

it(`Should change text`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.props().text).toEqual(``);
  wrapper.props().onTextInput({target: {value: `Na-na-na-na Batman`}});
  expect(wrapper.props().text).toEqual(`Na-na-na-na Batman`);
});
