var React = require('react');
var UserUtil = require('../../util/userUtil');
var FriendBox = require('./timelineSidebarFriendBox');


var TimelineSidebar = React.createClass({
  render: function () {
    // <section className="timeline-sidebar-item user-bio">
    //   This will be the bio
    // </section>
		return(
			<section className="timeline-sidebar clear-fix">
        <FriendBox friends={ this.props.friends }
          user={ this.props.user }/>

      </section>
		);
	}
});

module.exports = TimelineSidebar;
