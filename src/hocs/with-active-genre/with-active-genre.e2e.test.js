import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilterSettings} from '../../utils/const';
import withActiveGenre from './with-active-genre.jsx';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveGenre(MockComponent);

it(`Should change active genre`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        genre={FilterSettings.DEFAULT_VALUE}
      />
  );

  expect(wrapper.props().activeGenre).toEqual(FilterSettings.DEFAULT_VALUE);
  wrapper.props().onGenreChange(`Action`);
  expect(wrapper.props().activeGenre).toEqual(`Action`);
});
