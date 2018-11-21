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

  render() {
    if (this.props.feed.source_ids.length > 0) {
      return (
        <>
          <li className="feed-li" key={this.props.feed.id}>
            <header>
              {this.state.active ?
                (<small className="img-box" onClick={e => this.toggleActive(e)}>
                  <img src={window.down_arrow} alt="down_arrow"/>
                </small>) :
                (<small className="img-box" onClick={e => this.toggleActive(e)}>
                  <img src={window.right_arrow} alt="right_arrow"/>
                </small>)
              }
              <Link to={`/category/${this.props.feed.feed_name}`}
                style={{ textDecoration: 'none'}}>
                <div className="title">{this.props.feed.feed_name}</div>
              </Link>
            </header>
          </li>

          {this.state.active ? this.renderSourcesUl() : null}
        </>
      )
    } else {
      return (
        <>
          <li className="feed-li" key={this.props.feed.id}>
            <header>
              {this.state.active ?
                (<small className="img-box" onClick={e => this.toggleActive(e)}>
                  <img src={window.down_arrow} alt="down_arrow"/>
                </small>) :
                (<small className="img-box" onClick={e => this.toggleActive(e)}>
                  <img src={window.right_arrow} alt="right_arrow"/>
                </small>)
              }
              <div className="title">{this.props.feed.feed_name}</div>
            </header>
          </li>
        </>
      )
    }
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
