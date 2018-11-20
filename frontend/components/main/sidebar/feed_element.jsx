import React from 'react';
import { connect } from 'react-redux';

class FeedElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {

  }

  toggleActive() {
    if (this.state.active === true) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  }

  renderSourcesUl() {
    return (
      <ul id="feed-sources-ul">
        {this.props.feed.source_ids.map((source_id) => {
          return (
            <li className="feed-source-li" key={source_id}>
              <header>
                {this.props.sources[source_id].source_name}
              </header>
            </li>
          )
        })}
      </ul>
    )
  }

  render () {
    if (this.state.active) {
      return (
        <>
          <li className="feed-li" key={this.props.feed.id}>
            <header>
              <small className="img-box" onClick={this.toggleActive}>
                <img src={window.down_arrow} alt="down_arrow"/>
              </small>
              <span className="title">{this.props.feed.feed_name}</span>
            </header>
          </li>

          {this.renderSourcesUl()}
        </>
    )} else {
      return (
        <>
          <li className="feed-li" key={this.props.feed.id}>
            <header>
              <small className="img-box" onClick={this.toggleActive}>
                <img src={window.right_arrow} alt="right_arrow"/>
              </small>
              <span className="title">{this.props.feed.feed_name}</span>
            </header>
          </li>
        </>
    )}
  }
}

const mapStateToProps = (state) => ({
  sources: state.entities.sources
})

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedElement);
