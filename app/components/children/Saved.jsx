var React = require("react");
var helpers = require("../utils/helpers.js");
var Saved = React.createClass({

  getInitialState: function() {
    return {
      doIneedThis: false
    };
  },

  _handleDelete: function(event) {

    var articleMongoId = event.target.value;
    var that = this;

    helpers.apiDelete(articleMongoId).then(function(){

      helpers.apiGet().then(function(query){
        that.props._resetMongoResults(query.data);
      });
    });
  },

  render: function() {

    var that = this;

    return (

      <div>

        <div>
          <h3><b>Saved Articles</b></h3>
        </div>

        <div>
          <ul>
            {this.props.mongoResults.map(function(search, i) {

              return (
                <li key={search._id}>
                  <div>
                    <div>
                      <b><a href={search.url} target="_new">{search.title}</a></b>
                      <i> {search.date.substring(0, 10)}</i>
                    </div>
                    <span>
                      <button type="button" onClick={that._handleDelete} value={search._id}>Remove</button>
                    </span>
                  </div>
                </li>
              );
            })}

          </ul>
        </div>

      </div>
      
    );
  }
});

module.exports = Saved;