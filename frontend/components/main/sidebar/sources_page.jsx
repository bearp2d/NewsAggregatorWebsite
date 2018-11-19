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
  }

  handleDropdown(source) {
    return (e) => {
      e.stopPropagation()
      this.setState({selectedSource: source, dropdownOpen: true})
    }
  }

  renderNewsSourceLis() {
    return this.props.sources.map((source, idx) => {
      return (
        <li className="source-li" key={idx}>
          <header>
            <span className="title">{source.name}</span>
            <br/>
            <span className="description">{source.url}</span>
            <button className="dropbutton"
              onClick={this.handleDropdown(source)}>
              FOLLOW
            </button>
          </header>
          <p className="description">{source.description}</p>
        </li>
      )
    });
  }

  render() {
    return (
      <>
        <FeedsDropdown selectedSource={this.state.selectedSource}
          dropdownOpen={this.state.dropdownOpen}/>
        <ul id="sources-ul"
          onClick={() => this.setState({dropdownOpen: false})}>
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
