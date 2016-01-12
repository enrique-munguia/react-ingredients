var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" headingColor="#B31217" />,
  document.getElementById('ingredients'));
