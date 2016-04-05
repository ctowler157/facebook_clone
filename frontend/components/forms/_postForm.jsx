var React = require('react');
var PostUtil = require('../../util/postUtil.js');
// var PostActions = require('../../actions');

var PostForm = React.createClass({
	getInitialState: function () {
		// var authorId;

    // if (this.props.user !== undefined) {
    //   authorId = this.props.user.userId;
    // }
		// return { body: "", authorId: authorId };
		// return { body: "", };
    var NEWS_FEED_CONSTANT = "NEWS_FEED";
    var timelineId = this.props.timelineId;
    if (timelineId === NEWS_FEED_CONSTANT) {
      timelineId = this.props.user.id;
    }
		return({ body: "", timelineId: timelineId });
	},

	// componentDidMount: function () {
  //   var NEWS_FEED_CONSTANT = "NEWS_FEED";
	// 	var authorId;
  //   var timelineId = this.props.timelineId;
  //   if (this.props.user !== undefined) {
  //     authorId = this.props.user.id;
  //
  //     if (timelineId === NEWS_FEED_CONSTANT) {
  //       timelineId = this.props.user.id;
  //     }
  //   }
  //   debugger
	// 	this.setState({ body: "", authorId: authorId, timelineId: timelineId });
	// },
	componentDidMount: function () {
    // var NEWS_FEED_CONSTANT = "NEWS_FEED";
    // var timelineId = this.state.timelineId;
    // if (timelineId === NEWS_FEED_CONSTANT) {
    //   timelineId = this.props.user.id;
    // }
    // debugger
		// this.setState({ body: "", timelineId: timelineId });
	},

	updateBody: function (event) {
		this.setState({ body: event.currentTarget.value });
	},

	handleClick: function () {
		if (this.state.body !== "") {
			this.tryCreatePost();
		}
	},

  preventRedirect: function (e) {
    e.preventDefault();
  },

	clearForms: function () {
		this.setState({ body: "" });
	},

	// tryCreatePost: function() {
	// 	var formData = new FormData();
	// 	formData.append("post[author_id]", this.state.authorId);
	// 	formData.append("post[timeline_id]", this.state.timelineId);
	// 	formData.append("post[body]", this.state.body);
  //   debugger
	// 	// PostUtil.tryCreatePost(formData, this.clearForms);
	// },
	tryCreatePost: function() {
		var formData = new FormData();
		formData.append("post[author_id]", this.props.user.id);
		formData.append("post[timeline_id]", this.state.timelineId);
		formData.append("post[body]", this.state.body);

		PostUtil.tryCreatePost(formData, this.clearForms);
	},

	render: function () {
    var navClass = "post-form-top-nav clear-fix";
    // var navItems = ["Post", "Photo/Video"];
    var navItems = ["Post", "Photo"];

    if (this.props.timelineId === "NEWS_FEED") {
      navClass += " news-feed-post-form";
      // navItems = ["Update Status", "Add Photo/Video", "Create Photo Album"];
      navItems = ["Update Status", "Add Photo"];
    } else {
      navClass += " timeline-post-form";
      if (this.props.user.id == this.props.timelineId) {
        // navItems = ["Status", "Photo/Video", "Life Event"];
        navItems = ["Status", "Photo"];
      }
    }

    var navItemsList = (navItems.map(function (item, i) {
      return (
        <li key={ i }>
          <a href="#" onClick={ this.preventRedirect }>{ item }</a>
        </li>
      );
    }));

    var navBar = (
      <nav className={ navClass }>
        <ul>{ navItemsList }</ul>
      </nav>
    );

		return(
			<div className="post-form">
        { navBar }
        <div className="post-pic-and-input clear-fix">
          <div className="post-author-pic-thumb clear-fix"/>
        <div className="post-input-padding">
          <input type="textarea" className="post-form-body-input post-input"
              value={ this.state.body} onChange={ this.updateBody }/>
        </div>
      </div>
        <div className="bottom-of-post-form clear-fix">
          <button type="button" className="post-form-submit blue-button"
            onClick={ this.handleClick }>Post</button>
        </div>
			</div>
		);
	}
});

module.exports = PostForm;
