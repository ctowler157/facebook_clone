var React = require('react');

var FriendBox = React.createClass({

  preventDefault: function (e) {
    e.preventDefault();
  },

  render: function () {
    var friends = this.props.friends;
    var user = this.props.user;
    var friendsLink = "#/user/" + user.id + "/friends";

    var friendListItems = friends.map(function (friend) {
      var profileLink = "#/user/" + friend.id;
      var name = friend.first_name + " " + friend.last_name;
      return (
        <li key={ friend.id }>
          <a href={ profileLink } className="friend-icon-item"
            ><img src={ friend.profile_pic_url }
              className="friend-profile-thumb"/><div
              className="friend-name">{ name }</div></a>
        </li>
        );
      });
    return (
      <section className="timeline-sidebar-item friend-grid">
        <div className="friend-grid-header">
          <a className="friends-symbol-button"
            href={ friendsLink }
            onClick={ this.preventDefault }/>
          <div className="friend-grid-text">
            <a href={ friendsLink }
              onClick={ this.preventDefault }
              >Friends</a>
            <p className="friend-count">{ friends.length }</p>
          </div>
        </div>
        <div className="friends-grid-container">
          <ul className="friend-icon-list">
            { friendListItems }
          </ul>
        </div>
      </section>
    );
  }
});

module.exports = FriendBox;
