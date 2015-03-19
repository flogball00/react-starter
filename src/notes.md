``` app.js
var React = require('react');
var AddItem = require('./AddItem');

var App = React.createClass({
    getInitialState(){
      return {
          list: []
      }
    },
    add(item) {
        this.setState({
            list: this.state.list.concat(item)
        });
    },
    render() {
        var list = this.state.list.map(function(item, index){
            return(
                <li key={index}>{item}</li>
            )
        });
       return(
           <div className="container">
               <h1>hello world</h1>
               <AddItem add={this.add}/>
               <ul>
                {list}
               </ul>
           </div>
       )
   }
});

React.render(<App />, document.getElementById('app'));

```

``` AddItem.js
var React = require('react');

var AddItem = React.createClass({
    propTypes: {
        add: React.PropTypes.func
    },
    getInitialState() {
      return {
          items: []
      }
    },
    handleSubmit(e){
        e.preventDefault();
        this.props.add(this.refs.input.getDOMNode().value);
        this.refs.input.getDOMNode().value = '';
    },
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <input
                            type="text"
                            className="form-control"
                            ref="input"
                        />

                    </div>
                    <div className="row">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >Add List</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = AddItem;
```