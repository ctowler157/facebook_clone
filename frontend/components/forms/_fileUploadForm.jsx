var React = require("react");
var UserUtil = require('../../util/userUtil.js');

var UploadForm = React.createClass({


  getInitialState: function () {
    return {
      imageUrl: null,
      imageFile: null
    };
  },

  handleFileChange: function (e) {
    var file = e.currentTarget.files[0],
        reader = new FileReader();

    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.resetFile();
    }
  },

  resetForm: function () {
    this.setState({
      imageUrl: null,
      imageFile: null
    });
  },

  handleTitleChange: function (e) {
    this.setState({ title: e.currentTarget.value });
  },

  handleBodyChange: function (e) {
    this.setState({ body: e.currentTarget.value });
  },

  handleSubmit: function (e) {
    var user = this.props.user;
    var param = "user[" + this.props.string + "]";
    var formData = new FormData();
    var file = this.state.imageFile;
    formData.append(param, file);
    UserUtil.updateBio(user.id, formData);
    this.props.callback();
  },

  render: function () {
    var preview;

    if (this.state.imageUrl) {
      preview =(
                <div>
                  <p>Preview:</p>
                  <img className="preview-image" src={this.state.imageUrl} />
                </div>
              );
    }

    return(
      <div className="upload-form">
        <form onSubmit={ this.handleSubmit }>
          <label className="modal-text">
            <input
              className="upload-input"
              type="file"
              onChange={this.handleFileChange}
            />
          </label>
          { preview }
          <br/>
          <input className="blue-button upload-input" type="submit" value="Upload"/>
        </form>
      </div>
    );
  }

});

module.exports = UploadForm;
