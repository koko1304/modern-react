// Frameworks
import React from 'react';

// VideoListItem Component
const VideoListItem = ({video, changeVideo}) => {
	
	return (

		<li onClick={() => changeVideo(video)} className="list-group-item">
			<div className="row">
				<div className="col-md-5">
					<img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="img-responsive"/>
				</div>
				<div className="col-md-7">
					<p>{video.snippet.title}</p>
				</div>
			</div>
		</li>

	);
};

// Export VideoListItem
module.exports = VideoListItem;