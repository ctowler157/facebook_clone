var React = require('react');
var UserUtil = require('../../util/userUtil');

var TimelineTabs = React.createClass({
  render: function () {
    var user = this.props.user;

		return(
			<nav className="timeline-header-tabs clear-fix">
        Tabs loaded
      </nav>
		);
	}
});

module.exports = TimelineTabs;
