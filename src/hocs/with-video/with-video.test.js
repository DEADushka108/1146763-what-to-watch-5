import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {featuredMovie} from '../../__test-mock__/movies.js';
import withVideo from './with-video';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`Should render withVideo correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        movie={featuredMovie}
        isPreview={true}
        isPlaying={false}
        isMuted={true}
        src={``}
        poster={``}
      />
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
