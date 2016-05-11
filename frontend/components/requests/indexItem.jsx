var React = require('react');
var RequestUtil = require('../../util/friendRequestUtil.js');

var RequestIndexItem = React.createClass({

  confirmRequest: function (e) {
    e.preventDefault();
    var req = this.props.request;
    var response = new FormData();
    response.append("request[accepted]", true);
    RequestUtil.updateRequest(response, req.id);
  },

  deleteRequest: function (e) {
    e.preventDefault();
    var req = this.props.request;
    var response = new FormData();
    response.append("request[accepted]", false);
    RequestUtil.updateRequest(response, req.id);
  },

  render: function (){
    var request = this.props.request;
    var sender = request.sender;
    var senderUrl = "#/user/" + request.sender_id;
    var name = sender.first_name + " " + sender.last_name;

    return (
      <li className="friend-request-index-item clear-fix">
        <a href={ senderUrl }><img className="friend-request-thumb" src={ sender.profile_thumb_url }/></a>
        <a href={ senderUrl } className="friend-request-name">{name}</a>
        <button onClick={ this.deleteRequest }
          className="friend-request-delete">Delete Request</button>
        <button onClick={ this.confirmRequest }
          className="friend-request-confirm">Confirm</button>
      </li>
    );
  }
});

module.exports = RequestIndexItem;
