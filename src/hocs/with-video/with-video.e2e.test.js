import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {moviesList} from '../../__test-mock__/movies.js';
import withVideo from './with-video.jsx';

configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {children, onPlayStatusChange} = props;

  return <div onMouseEnter={onPlayStatusChange} onMouseLeave={onPlayStatusChange}>
    {children}
  </div>;
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlayStatusChange: PropTypes.func.isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);
const playEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
const pauseEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

it(`withVideo HOC callback should turn video on`, () => {
  const {poster, previewSrc} = moviesList[0];
  const wrapper = mount(
      <MockComponentWrapped
        movie={moviesList[0]}
        isPreview={true}
        isPlaying={false}
        isMuted={true}
        src={previewSrc}
        poster={poster}
      />
  );

  wrapper.find(`div`).simulate(`mouseenter`);
  expect(playEventMock).toHaveBeenCalledTimes(1);
});

it(`withVideo HOC callback should turn video off`, () => {
  const {poster, previewSrc} = moviesList[0];
  const wrapper = mount(
      <MockComponentWrapped
        movie={moviesList[0]}
        isPreview={true}
        isPlaying={true}
        isMuted={true}
        src={previewSrc}
        poster={poster}
      />
  );

  wrapper.find(`div`).simulate(`mouseenter`);
  expect(pauseEventMock).toHaveBeenCalledTimes(1);
});
