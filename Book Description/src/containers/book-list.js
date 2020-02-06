// Frameworks
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creators
import actions from '../actions';

// Variables
const bind = bindActionCreators;

const BookList = ({books, actions}) => {
	var bookList = books.map(function(book) {
		return <li onClick={() => actions('BOOK_SELECTED', book)} key={book.title} className="list-group-item">{book.title}</li>
	});

	return (
		
		<ul className="list-group">
			{bookList}
		</ul>

	);
};

// Whenever the state change it value, the whose component will be rerender
export default connect(({books}) => ({books}), (dispatch) => bind({ actions }, dispatch))(BookList);