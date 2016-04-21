var React = require('react');
var PostUtil = require('../../util/postUtil.js');
var Modal = require('react-modal');

// var PostActions = require('../../actions');

var PostForm = React.createClass({
	getInitialState: function () {
		// will be needed when determining who to autopopulate
		// search bar with
		// var user = this.props.user;
		return { search: "", noFeature: false };
	},

	updateSearch: function (event) {
		this.setState({ search: event.currentTarget.value });
	},

  openNoFeature: function (e) {
    e.preventDefault();
    this.setState({ noFeature: true });
  },
  closeNoFeature: function (e) {
    this.setState({ noFeature: false });
  },

	render: function () {
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
        borderRadius           : '3px'
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
			<div className="search-bar">
        { noFeature }
				<input type="text" className="search-bar-input" value={ this.state.search} onChange={ this.updateSearch }/>
				<button type="button" className="search-bar-submit" onClick={ this.openNoFeature }>
					 <div className="magnifying-glass"/>
				</button>
			</div>
		);
	}
});

module.exports = PostForm;
