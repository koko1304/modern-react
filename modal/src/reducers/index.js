import { combineReducers } from 'redux';

// Reducers
import Post from './post';

const rootReducer = combineReducers({
  post: Post
});

export default rootReducer;
