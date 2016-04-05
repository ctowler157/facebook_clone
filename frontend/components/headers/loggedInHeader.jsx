var React = require('react');
var NavButtons = require('./navButtons');
var SearchBar = require('./_searchBar');

var LoggedInHeader = React.createClass({
	render: function () {
    return (
			<nav className="header-nav logged-in-header">
				<ul className="header-nav-left">
					<li><SearchBar user={ this.props.user }/></li>
					<li><a href="#/" className="header-nav-thumb-logo">f</a></li>
				</ul>
				<NavButtons user={ this.props.user} />
      </nav>
		);
  }
});

module.exports = LoggedInHeader;
