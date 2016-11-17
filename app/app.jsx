var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main');
var Timer = require('./components/Timer');
var Countdown = require('./components/Countdown');

// Load foundation
$(document).foundation();

require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='countdown' component={Countdown}></Route>
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
