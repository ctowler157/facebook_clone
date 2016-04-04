var React = require('react');
var UserUtil = require('../../util/userUtil');

var TimelineButtons = React.createClass({
  render: function () {
    var user = this.props.user;

		return(
			<ul className="timeline-header-buttons">
        <li><a href='#'>Friends</a></li>
        <li><a href='#'>Following</a></li>
        <li><a href='#'>Message</a></li>
      </ul>
		);
	}
});

module.exports = TimelineButtons;
