// Frameworks
import { combineReducers } from 'redux';

// Reducers
import BooksReducer from './books';
import SelectedBook from './selected-book';

// This combineReducers function help us to insert
// reducers into states and apply to our application
const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBook
});

export default rootReducer;
