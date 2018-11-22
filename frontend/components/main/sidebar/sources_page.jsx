import React from 'react';
import { connect } from 'react-redux';

import { fetchAllSources } from '../../../actions/feed_actions';
import FeedsDropdown from './feeds_dropdown';

class SourcesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSource: {id: null}, dropdownOpen: false};
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllSources();

    window.scrollTo({top: 0, behavior: "smooth"});
  }

  handleDropdown(source) {
    return (e) => {
      e.stopPropagation()
      this.setState({selectedSource: source, dropdownOpen: true})
    }
  }

  renderNewsSourceLis() {
    return Object.values(this.props.sources).map((source) => {
      return (
        <li className="source-li" key={source.id}>
          <header>
            <span className="title">{source.source_name}</span>
            <br/>
            <span className="description">{source.source_url}</span>
            <button className="dropbutton"
              onClick={this.handleDropdown(source)}>
              FOLLOW
            </button>
          </header>
          {(this.state.selectedSource.id === source.id) ?
            <FeedsDropdown selectedSource={this.state.selectedSource}
              dropdownOpen={this.state.dropdownOpen}/> : null}
          <p className="description">{source.source_description}</p>
        </li>
      )
    });
  }

  render() {
    return (
      <>
        <ul id="sources-ul"
          onClick={() => this.setState({
            selectedSource: {id: null},
            dropdownOpen: false})
          }>
          {this.renderNewsSourceLis()}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  sources: state.entities.sources,
  feeds: state.entities.feeds
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesPage);
