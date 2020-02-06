import React from 'react';

const VideoDetail = ({video}) => {
	console.log("Video Detail");

	return (

		<div className="card-body">
			<h2 className="card-title">{video.snippet.title}</h2>
			<p className="card-text">{video.snippet.description}</p>
		</div>

	);
};

module.exports = VideoDetail;