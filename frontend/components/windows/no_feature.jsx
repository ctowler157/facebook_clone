var React = require('react');
var Modal = require('react-modal');

var NoFeature = React.createClass({
  getInitialState: function () {
    return { show: false };
  },

  show: function (e) {
    e.preventDefault();
    this.setState({ show: true });
  },

  hide: function (e) {
    e.preventDefault();
    this.setState({ show: false });
  },


  render: function() {
    var noFeatureModalStyle = {
      content : {
        padding                 :  '0px',
        top                     : '50%',
        left                    : '50%',
        right                   : 'auto',
        bottom                  : 'auto',
        marginRight             : '-50%',
        transform               : 'translate(-50%, -50%)',
        overflow                : 'hidden',
        borderRadius           : '3px'
      }};
      // overlay : {
      //   backgroundColor   : 'rgba(95, 95, 95, 0.75)'
      // }
    return (
      <Modal
        isOpen={this.props.show}
        onRequestClose={this.hide}
        style={noFeatureModalStyle} >
        <p>This feature is coming soon!</p>
      </Modal>
    );
  }
});

module.exports = NoFeature;
