import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchQuery: "", placeholder: "Search"}
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateQuery(e) {
    e.stopPropagation();
    this.setState({searchQuery: e.target.value});
  }

  handleSubmit() {
    this.setState({searchQuery: ""});
    this.props.history.push(`/search/${this.state.searchQuery}`);
    document.getElementById("search-bar").blur();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="search-bar"
          type="text"
          placeholder={this.state.placeholder}
          onFocus={() =>
            this.setState({placeholder: "Search in your feeds and boards"})}
          onBlur={() =>
            this.setState({placeholder: "Search"})}
          value={this.state.searchQuery}
          onChange={e => this.updateQuery(e)}
          autoComplete="off"
          >
        </input>
      </form>
    )
  }
}

export default withRouter(SearchBar);
