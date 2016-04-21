var React = require('react');
var SessionUtil = require('../../util/sessionUtil.js');
var SessionStore = require('./../../stores/sessionStore');
var Modal = require('react-modal');
var RequestsIndex = require('../requests/index');
var NoFeature = require('../windows/no_feature.jsx');


var NavButtons = React.createClass({
  getInitialState: function () {
    return { showRequests: false, noFeature: false }
  },

	prevDef: function (e) {
		e.preventDefault();
	},

  showRequests: function (e) {
    e.preventDefault();
    this.setState({ showRequests: true })
  },

  hideRequests: function (e) {
    this.setState({ showRequests: false })
  },

  openNoFeature: function (e) {
    e.preventDefault();
    this.setState({ noFeature: true });
  },
  closeNoFeature: function (e) {
    this.setState({ noFeature: false });
  },

  // openNoFeature: function (e) {
  //   NoFeature.open(e);
  // },


	logOut: function () {
    // var router = this.context.router;

    SessionUtil.logOut();

    // SessionUtil.logOut(function () {
    //   router.push("/");
    // });


	},

	render: function () {

    // ---------Modal Styles----------------

    var requestsModalStyle = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
     },
     overlay : {
       backgroundColor   : 'rgba(95, 95, 95, 0.75)'
     }
    };

    var noFeatureModalStyle = {
      content : {
        padding                 :  '20px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius            : '3px'
      }};

		var user = this.props.user;

    var reqModal = (
      <Modal
        isOpen={ this.state.showRequests }
        onRequestClose={ this.hideRequests }
        style={ requestsModalStyle }
        >
        <div className="notifications-container">
          <RequestsIndex />
        </div>
      </Modal>
    );

    var noFeature = (
      <Modal
        isOpen={this.state.noFeature}
        onRequestClose={this.closeNoFeature}
        style={noFeatureModalStyle} >
        <p className="modal-text">This feature is coming soon!</p>
      </Modal>
    );

		return(
			<ul className="header-nav-right nav-buttons">
        { noFeature }
				<li>
          <a className="left-buttons user-name" href={ "#/user/" + user.id }
            ><img src={ user.profile_pic_url } className="tiny-profile-pic-thumb"
            /><span className="user-name-button">{ user.first_name }</span></a>
        </li>
				<li><a className="left-buttons home-button" href={ "#/" }>Home</a></li>
				<li className="empty-li"></li>
				<li>
					<a href="#/requests" className="notis requests-button"
						onClick={ this.openNoFeature }></a>
          { reqModal }
				</li>
				<li>
					<a href="#/messages" className="notis messages-button"
						onClick={ this.openNoFeature }></a>
				</li>
				<li>
					<a href="#/notifications" className="notis notifications-button"
						onClick={ this.openNoFeature }></a>
				</li>
				<li><button type="button" className="blue-button" onClick={ this.logOut }>Log Out</button></li>
			</ul>
		);
	}
});

module.exports = NavButtons;
