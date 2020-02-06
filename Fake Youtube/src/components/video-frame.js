import React from 'react';

const VideoFrame = ({video}) => {
	console.log("Video Frame");

	return (

		<div className="card-img-top">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" className="embed-responsive item"></iframe>
			</div>
		</div>

	);
};

module.exports = VideoFrame;