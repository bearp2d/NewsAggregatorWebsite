import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FeedElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {

  }

  toggleActive(e) {
    e.stopPropagation();
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
          let source = this.props.sources[source_id];
          return (
            <Link to={`/subscription/${source.source_url}`}
              style={{ textDecoration: 'none'}}>
              <li className="feed-source-li" key={source_id}>
                <header>
                  {source.source_name}
                </header>
              </li>
            </Link>
          )
        })}
      </ul>
    )
  }

  renderFeedElement() {
    if (this.state.active) {
      return (
        <>
          <li className="feed-li" key={this.props.feed.id}>
            <header>
              <small className="img-box" onClick={e => this.toggleActive(e)}>
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
              <small className="img-box" onClick={e => this.toggleActive(e)}>
                <img src={window.right_arrow} alt="right_arrow"/>
              </small>
              <span className="title">{this.props.feed.feed_name}</span>
            </header>
          </li>
        </>
    )}
  }

  render() {
    if (this.props.feed.source_ids.length > 0) {
      return (
        <Link to={`/category/${this.props.feed.feed_name}`}
          style={{ textDecoration: 'none'}}>
          {this.renderFeedElement()}
        </Link>
      )
    } else {
        return this.renderFeedElement()
    };
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
