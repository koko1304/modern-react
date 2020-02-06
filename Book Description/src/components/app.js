// Frameworks
import React from 'react';

// Containers
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

const App = () => {
    return (
    	<div className="py-5">
    		<h1 className="mb-0">BOOK SHOP</h1>
    		<hr className="mb-4 mt-1"/>
			<div className="row">
				<div className="col-md-4">
					<BookList />
				</div>
				<div className="col-md-8 d-flex">
					<BookDetail />
				</div>
			</div>
		</div>
    );
}

export default App;