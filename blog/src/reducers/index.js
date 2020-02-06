// Frameworks
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import Posts from './posts';
import Post from './post';
import SelectedPostIds from './selected-post-ids';

// Using for apply multiple reducers to the store
// if you have only one reducer you don't need to
// use this just pass reducer to the store directly
const rootReducer = combineReducers({
	post: Post,
	posts: Posts,
	selectedPostIds: SelectedPostIds,
	form: formReducer
});

export default rootReducer;
