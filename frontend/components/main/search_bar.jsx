import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchQuery: ""}
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateQuery(e) {
    e.stopPropagation();
    this.setState({searchQuery: e.target.value});
  }

  handleSubmit() {
    this.setState({searchQuery: ""})
    this.props.history.push(`/search/${this.state.searchQuery}`)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchQuery}
          onChange={e => this.updateQuery(e)}
          >
        </input>
      </form>
    )
  }
}

export default withRouter(SearchBar);
