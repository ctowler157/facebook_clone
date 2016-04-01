var React = require('react');
var PostForm = require('../forms/_postForm');
var PostIndex = require('../posts/index');

var Timeline = React.createClass({
  render: function () {
		return(
			<div>
        <header className="timeline-header">This will be the header with the photo</header>
        <section className="timeline-sidebar">this will be the sidebar</section>
        <section className="timeline-post-index">this will be the posts</section>
			</div>
		);
	}
});

module.exports = Timeline;
