var React = require('react');
var UserUtil = require('../../util/userUtil');
var TimelineTabs = require('./timelineTabs');
var TimelineButtons = require('./timelineButtons');

var TimelineHeader = React.createClass({
  render: function () {
    var user = this.props.user;

		return(
			<section className="timeline-header clear-fix">

        <div className="timeline-cover-photo clear-fix">
          <a className="timeline-header-name"
            href="#">{ user.first_name } { user.last_name }</a>
        </div>
        <div className="timeline-header-tabs-container">
          <TimelineButtons user={ user } currentUser={ this.props.currentUser }
						friends={ this.props.friends } userId={ this.props.userId }/>
          <div className="timeline-profile-pic-container clear-fix">
            <div className="timeline-header-profile-picture clear-fix" />
          </div>
          <TimelineTabs user={ user } currentUser={ this.props.currentUser }/>
        </div>
      </section>
		);
	}
});

module.exports = TimelineHeader;
