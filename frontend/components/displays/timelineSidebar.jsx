var React = require('react');
var UserUtil = require('../../util/userUtil');

var TimelineSidebar = React.createClass({
  render: function () {
		return(
			<section className="timeline-sidebar clear-fix">
        <section className="timeline-sidebar-item user-bio">
          This will be the bio
        </section>
        <section className="timeline-sidebar-item friends-grid">
          This will be the friends grid
        </section>
      </section>
		);
	}
});

module.exports = TimelineSidebar;
