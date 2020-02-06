// Frameworks
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

// Reducers
import reducers from './reducers';

// Routes
import Root from './routes/root';
import AddPost from './routes/posts/add';
import PostDetail from './routes/posts/detail';

// Redux Store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);


// Render
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<Switch>
    		<Route path="/posts/add" component={AddPost} />
    		<Route path="/posts/:id" component={PostDetail} />
			<Route path="/" component={Root} />
		</Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
