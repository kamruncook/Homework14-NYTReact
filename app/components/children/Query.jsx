var React = require("react");
var Query = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear: ""
    };
  },

  _handleSubmit: function(event) {

    event.preventDefault();

    this.props._setSearchFeilds(this.state.topic, this.state.startYear, this.state.endYear);

  },

  _handleTopicChange: function(e) {
    this.setState({topic: e.target.value});
  },

  _handleStartYearChange: function(e) {
    this.setState({startYear: e.target.value});
  },

  _handleEndYearChange: function(e) {
    this.setState({endYear: e.target.value});
  },

  render: function() {
    return (

      <div>

        <div>
          <h3><b>Search</b></h3>
        </div>

        <div>
          <form role="form" onSubmit={this._handleSubmit}>

            <div>
              <label>Topic</label>
              <input type="text" className="form-control text-center" id="topic" onChange={this._handleTopicChange} />
            </div>

            <br />

            <div>
              <label>Start Year</label>
              <input type="text" className="form-control text-center" id="startYear" onChange={this._handleStartYearChange} />
            </div>

            <br />

            <div>
              <label>End Year</label>
              <input type="text" className="form-control text-center" id="endYear" onChange={this._handleEndYearChange} />
            </div>

            <br />

            <button type="submit" id="searchBtn">Search</button><br />

          </form>
        </div>

      </div>

    );
  }
});

module.exports = Query;