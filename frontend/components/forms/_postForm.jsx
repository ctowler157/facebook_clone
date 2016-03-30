var React = require('react');
// var PostActions = require('../../actions');

var PostForm = React.createClass({

	render: function () {
		return(
			<div>
				<h1>Rendering the post form with { this.props.user.email }</h1>
			</div>
		);
	}
});

module.exports = PostForm;
