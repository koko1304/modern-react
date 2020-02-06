// Frameworks
import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({selectedBook}) => {
	return (
		<div className="w-100 p-5 text-white bg-info">
			<h2><b>Title:</b> {selectedBook.title}</h2>
			<p><b>Author:</b> {selectedBook.author}</p>
			<p><b>Country:</b> {selectedBook.country}</p>
			<p><b>Gender:</b> {selectedBook.gender}</p>
		</div>
	);
};

export default connect(({selectedBook}) => ({selectedBook}))(BookDetail);