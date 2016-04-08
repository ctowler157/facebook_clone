var React = require('react');
var UserUtil = require('../../util/userUtil');
var TimelineTabs = require('./timelineTabs');
var TimelineButtons = require('./timelineButtons');
var Modal = require('react-modal');
var FileUploadForm = require('../forms/_fileUploadForm.jsx');

var TimelineHeader = React.createClass({
  getInitialState: function () {
    return({ profilePicUrl: "", coverPhotoUrl: "",
      openUploadPro: false, openUploadCover: false,
    });
  },

// -------------Picture Uploads---------------
  openUploadProfilePic: function (e) {
    e.preventDefault();
    this.setState({ openUploadPro: true });
  },
  closeUploadProfilePic: function () {
    this.setState({ openUploadPro: false });
  },
  openUploadCover: function (e) {
    e.preventDefault();
    this.setState({ openUploadCover: true });
  },
  closeUploadCover: function () {
    this.setState({ openUploadCover: false });
  },

// -------------------------------------------
  render: function () {
    var user = this.props.user;

    var profileModalStyle = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
     }
    };

		return(
			<section className="timeline-header clear-fix">
        <Modal
          isOpen={ this.state.openUploadPro }
          onRequestClose={ this.closeUploadProfilePic }
          style={ profileModalStyle }
          >
          <FileUploadForm user={ this.props. currentUser }
            callback={ this.closeUploadProfilePic }
            string="profile_pic"/>
        </Modal>

        <Modal
          isOpen={ this.state.openUploadCover }
          onRequestClose={ this.closeUploadCover }
          style={ profileModalStyle }
          >
          <FileUploadForm user={ this.props.currentUser }
            callback={ this.closeUploadCover }
            string="cover_photo"/>
        </Modal>

        <div className="timeline-cover-photo clear-fix">
          <img className="timeline-cover-photo" src={ user.cover_photo_url }/>
          <a href="#/upload.cover.photo" className="edit-cover-button"
              onClick={ this.openUploadCover }><i className="camera-icon" />
            <div>Update Cover Photo</div>
            </a>
          <a className="timeline-header-name"
            href="#">{ user.first_name } { user.last_name }</a>
        </div>
        <div className="timeline-header-tabs-container">
          <TimelineButtons user={ user } currentUser={ this.props.currentUser }
						friends={ this.props.friends } userId={ this.props.userId }/>
          <div className="timeline-profile-pic-container clear-fix">
            <img src={ user.profile_pic_url }
                className="timeline-header-profile-picture" />
              <a href="#/upload.profile.pic" className="edit-profile-pic-button"
                onClick={ this.openUploadProfilePic }>
                <i className="camera-icon" />
                <div>Update Profile Picture</div>
              </a>
          </div>
          <TimelineTabs user={ user } currentUser={ this.props.currentUser }/>
        </div>
      </section>
		);
	}
});

module.exports = TimelineHeader;
