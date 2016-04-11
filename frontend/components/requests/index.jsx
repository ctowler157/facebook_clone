var React = require('react');
var RequestUtil = require('../../util/friendRequestUtil.js');
var RequestStore = require('../../stores/friendRequestStore');
var RequestIndexItem = require('./indexItem');

var RequestIndex = React.createClass({
	getInitialState: function () {
		return({ requests: [] });
	},

	componentDidMount: function () {
		this.requestListener = RequestStore.addListener(this._onChange);
    RequestUtil.fetchPendingRequests();
	},

  componentWillUnmount: function () {
    this.requestListener.remove();
  },

	_onChange: function () {
		this.setState({ requests: RequestStore.getAllRequests() });
	},

	render: function () {
    // var user = this.props.user;
    // var requests = this.state.requests;
    //
    // var liString = (requests.map(function (request) {
    //   return (<RequestIndexItem key={ request.id } request={ request }
    //     user={ user });
    // }));
    //  <ul>
    // 	 { liString }
    //  </ul>
		return(
      <h1>greetings from request index</h1>
	  );
	}
});

module.exports = RequestIndex;
