import {combineReducers} from 'redux';
import {reducer as movies} from './movies/movies.js';
import {reducer as reviews} from './reviews/reviews.js';
import {reducer as user} from './user/user.js'
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.MOVIES]: movies,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.USER]: user,
});
