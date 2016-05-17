var React = require('react');
var Modal = require('react-modal');
var ClearOverlay = require('../windows/clearOverlay.jsx');

var ClearOverlay = React.createClass({
  closeModal: function () {
    this.setState({ open: false });
    this.props.closeFunction();
  },

  render: function () {
    var clearModalStyle = {
      content : {
        padding                 :  '0px',
        top                     : '0px',
        left                    : '0px',
        right                   : '100%',
        bottom                  : '100%',
        background              : 'transparent',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius            : '0px'
      },
      overlay : {
        backgroundColor   : 'transparent'
      }
    };
    return (

      <Modal
        isOpen={ this.props.open }
        onRequestClose={this.closeModal}
        style={clearModalStyle}
        onClick={this.closeModal}>
      </Modal>
    );
  }
});

module.exports = ClearOverlay;
