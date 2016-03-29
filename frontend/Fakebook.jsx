var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App}/>
);

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>, document.getElementById('root')
  );
});
