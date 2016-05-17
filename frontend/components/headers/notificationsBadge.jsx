var React = require('react');

var NotificationsBadge = React.createClass({

  render: function () {
    var classString = "notifications-badge " + this.props.button;
    if (this.props.count === 0) {
      classString += " hidden";
    }

    return (
      <i className={ classString }
        >{ this.props.count }</i>
    );
  }
});

module.exports = NotificationsBadge;
