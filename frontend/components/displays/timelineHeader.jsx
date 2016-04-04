var React = require('react');
var UserUtil = require('../../util/userUtil');
var TimelineTabs = require('./timelineTabs');
var TimelineButtons = require('./timelineButtons');

var TimelineSidebar = React.createClass({
  render: function () {
    var user = this.props.user;

		return(
			<section className="timeline-header clear-fix">
        <div className="timeline-header-profile-picture clear-fix" />
        <a className="timeline-header-name"
          href="#">{ user.first_name } { user.last_name }</a>
        <TimelineButtons user={ user } currentUser={ this.props.currentUser }/>
        <TimelineTabs user={ user } currentUser={ this.props.currentUser }/>
      </section>
		);
	}
});

module.exports = TimelineSidebar;
