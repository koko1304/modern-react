// Frameworks
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoFrame from './components/video-frame';
import VideoDetail from './components/video-detail';

// Variables
const API_KEY = 'AIzaSyAR0OJ6MAXSlQmIT1FRFDMJlwe5UEPC-As';

// App Component
class App extends Component  {
	constructor(props) {
		super(props);

		this.state = { videos: null, selectedVideo: null };

		this.searchHandler('naruto');
	}

	searchHandler(term) {
		// Initialize Youtube API
		YTSearch({ key: API_KEY, term: term }, results => {
			this.setState({ videos: results, selectedVideo: results[0] });
		});
	}

	render() {
		if (!this.state.videos) return <div>Loading</div>;

		return (
			<div className="app py-5">
				<div className="my-4">
					<h1 className="text-white">YOUTUBE</h1>
				</div>
				<SearchBar submitInput={term => this.searchHandler(term)}/>
				<div className="row">
					<div className="col-md-8">
						<div className="card">
							<VideoFrame video={this.state.selectedVideo} />
							<VideoDetail video={this.state.selectedVideo} />
						</div>
					</div>
					<VideoList changeVideo={video => this.setState({selectedVideo: video})} videos={this.state.videos} />
				</div>
			</div>
		);
	}
};


// Render App to the dom
ReactDOM.render(<App />, document.querySelector('.container'));