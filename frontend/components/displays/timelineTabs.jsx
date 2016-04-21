var React = require('react');
var UserUtil = require('../../util/userUtil');
var Modal = require('react-modal');

var TimelineTabs = React.createClass({
  getInitialState: function () {
    return { noFeature: false };
  },

  // _onClick: function(e) {
  //   e.preventDefault();
  // },

  _onClick: function (e) {
    e.preventDefault();
    this.setState({ noFeature: true });
  },
  closeNoFeature: function (e) {
    this.setState({ noFeature: false });
  },

  render: function () {
    var user = this.props.user;
    var mutual = "";

    var noFeatureModalStyle = {
      content : {
        padding                 : '20px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius            : '3px'
      }
    };

    var noFeature = (
      <Modal
        isOpen={this.state.noFeature}
        onRequestClose={this.closeNoFeature}
        style={noFeatureModalStyle} >
        <p className="modal-text">This feature is coming soon!</p>
      </Modal>
    );

		return(
			<nav className="timeline-header-tabs-bar clear-fix">
        { noFeature }
        <ul className="timeline-header-tabs">
          <li className="selected"><a onClick={ this._onClick } href="#">Timeline</a></li>
          <li><a onClick={ this._onClick } href="#">About</a></li>
          <li><a onClick={ this._onClick } href="#">Friends <h6
            className="friends-button-mutual-friends"></h6></a></li>
          <li><a onClick={ this._onClick } href="#">Photos</a></li>
          <li><a onClick={ this._onClick } href="#">More</a></li>
        </ul>
      </nav>
		);
	}
});

module.exports = TimelineTabs;
