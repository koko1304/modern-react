// Frameworks
import React from 'react';

// Components
import VideoListItem from './video-list-item';

// VideoList Component
const VideoList = ({videos, changeVideo}) => {
	console.log("Video List");
	// Create List of Videos
	const videoItems = videos.map((video, i) => {
		return <VideoListItem changeVideo={changeVideo} key={video.id.videoId} video={video} />;
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

// Export VideoList
module.exports = VideoList;