import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withValidation from './with-validation.jsx';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withValidation(MockComponent);

it(`Should change validation status`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        text={``}
        rating={`1`}
      />
  );

  expect(wrapper.props().isValid).toEqual(false);
});
