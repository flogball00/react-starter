var React = require('react');

var App = React.createClass({
   render() {
       return(
           <div>
               hello world
           </div>
       )
   }
});

React.render(<App />, document.getElementById('app'));