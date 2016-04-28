var React = require('react');
var RequestUtil = require('../../util/friendRequestUtil.js');

var RequestIndexItem = React.createClass({

  render: function (){
    var request = this.props.request;
    var sender = request.sender;
    var senderUrl = "#/user/" + request.sender_id;
    var name = sender.first_name + " " + sender.last_name;

    return (
      <li className="friend-request-index-item clear-fix">
        <img className="friend-request-thumb" src={ sender.profile_thumb_url }/>
        <a href={ senderUrl } className="friend-request-name">{name}</a>
        <button className="friend-request-delete">Delete Request</button>
        <button className="friend-request-confirm">Confirm</button>
      </li>
    );
  }
});

module.exports = RequestIndexItem;
