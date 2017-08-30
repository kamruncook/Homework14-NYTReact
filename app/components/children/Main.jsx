var React = require("react");
var Query = require("./Query.jsx");
var Search = require("./Search.jsx");
var Saved = require("./Saved.jsx");
var helpers = require("../utils/helpers.js");
var Main = React.createClass({

  getInitialState: function() {
    return {
      apiResults: [],
      mongoResults: [],
      searchTerms: ["","",""]
    };
  },

  _setSearchFeilds: function(topic, start, end) {
    this.setState({ searchTerms: [topic, start, end] });
  },

  _resetMongoResults: function(newData){
    this.setState({ mongoResults: newData} );
  },

  componentDidMount: function() {

    helpers.apiGet().then(function(query){
      this.setState({mongoResults: query.data});
    }.bind(this));

  },

  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.searchTerms != prevState.searchTerms){
      helpers.articleQuery(this.state.searchTerms[0], this.state.searchTerms[1], this.state.searchTerms[2]).then(function(data) {
        this.setState({ apiResults: data });
      }.bind(this));
    }

  },

  render: function() {
    return (

      <div className="container">

        <div className="page-header">
          <h2 className="text-center" style={ {marginTop: "-12px"} }><b>NYTIMES REACT</b></h2>
        </div>

        <Query _setSearchFeilds={this._setSearchFeilds} />
        <Search apiResults={this.state.apiResults} _resetMongoResults={this._resetMongoResults} />
        <Saved mongoResults={this.state.mongoResults} _resetMongoResults={this._resetMongoResults} />

      </div>

    );
  }
});

module.exports = Main;
