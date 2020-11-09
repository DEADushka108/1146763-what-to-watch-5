import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withStatus from './with-status.jsx';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withStatus(MockComponent);

it(`Should change status`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        isFavorite={true}
      />
  );

  expect(wrapper.props().isFavorite).toEqual(true);
  wrapper.props().onFavoriteStatusChange(false);
  expect(wrapper.props().isFavorite).toEqual(false);
});
