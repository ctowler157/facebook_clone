var React = require('react');

var ConnectWithFriends = React.createClass({

	render: function () {
		var strings = [];
		strings.push(["See photos and updates", "from friends in News Feed."]);
		strings.push(["Share what's new", "in your life on your Timeline."]);
		strings.push(["Find more", "of what you're looking for with Facebook Search."]);

		var images = [
			"connect-images photosCI",
			"connect-images shareCI",
			"connect-images findCI"
		];
		var htmlMaker = function(image, bold, plain) {
			return (
				<div className="connect-bullet-item">
					<div className={image}></div>
					<div className="connect-bullet-text">
						<p className="connect-bullet-text-bold">
							{bold}
						</p>
						<p className="connect-bullet-text-plain">
							{plain}
						</p>
					</div>
				</div>
			);
		};

		bullet0 = htmlMaker(images[0], strings[0][0], strings[0][1]);
		bullet1 = htmlMaker(images[1], strings[1][0], strings[1][1]);
		bullet2 = htmlMaker(images[2], strings[2][0], strings[2][1]);

		return (
			<div className="connect-with-friends">
				<h2 className="connect-with-header"> Connect with friends and the<br/>world around you on Facebook. </h2>
				<div className="connect-bullets">
					{ bullet0 }
					{ bullet1 }
					{ bullet2 }
				</div>
			</div>
		);
	}
});

module.exports = ConnectWithFriends;
