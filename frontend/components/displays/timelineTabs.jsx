var React = require('react');
var UserUtil = require('../../util/userUtil');

var TimelineTabs = React.createClass({
  _onClick: function(e) {
    e.preventDefault();
  },

  render: function () {
    var user = this.props.user;
    var mutual = 19;

		return(
			<nav className="timeline-header-tabs-bar clear-fix">
        <ul className="timeline-header-tabs">
          <li className="selected"><a onClick={ this._onClick } href="#">Timeline</a></li>
          <li><a onClick={ this._onClick } href="#">About</a></li>
          <li><a onClick={ this._onClick } href="#">Friends <h6 
            className="friends-button-mutual-friends">{ mutual + " Mutual" }</h6></a></li>
          <li><a onClick={ this._onClick } href="#">Photos</a></li>
          <li><a onClick={ this._onClick } href="#">More</a></li>
        </ul>
      </nav>
		);
	}
});

module.exports = TimelineTabs;
