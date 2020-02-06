import { combineReducers } from 'redux';

// Reducers
import Posts from './posts';

const rootReducer = combineReducers({
  posts: Posts
});

export default rootReducer;
