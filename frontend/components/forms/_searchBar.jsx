var React = require('react');
var PostUtil = require('../../util/postUtil.js');
// var PostActions = require('../../actions');

var PostForm = React.createClass({
	getInitialState: function () {
		// will be needed when determining who to autopopulate
		// search bar with
		// var user = this.props.user;
		return { search: ""};
	},

	updateSearch: function (event) {
		this.setState({ search: event.currentTarget.value });
	},

	render: function () {
		return(
			<div className="search-bar">
				<input type="text" className="search-bar-input" value={ this.state.search} onChange={ this.updateSearch }/>
				<button type="button" className="search-bar-submit">Search</button>
			</div>
		);
	}
});

module.exports = PostForm;
