var React = require('react');
var UserUtil = require('../../util/userUtil');

var TimelineSidebar = React.createClass({
  render: function () {
		return(
			<section className="timeline-sidebar clear-fix">
        this will be the sidebar for { this.props.user.first_name }
      </section>
		);
	}
});

module.exports = TimelineSidebar;
