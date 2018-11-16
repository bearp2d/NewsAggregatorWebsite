import React from 'react';

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
      <strong>sources ul!!</strong>
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
              <span>{this.props.feed.feed_name}</span>

            </header>
          </li>
          {this.renderSourcesUl()}
        </>
      )
    } else {
      return (
        <li className="feed-li" key={this.props.feed.id}>
          <header>
            <small className="img-box" onClick={this.toggleActive}>
              <img src={window.right_arrow} alt="right_arrow"/>
            </small>
            <span>{this.props.feed.feed_name}</span>
          </header>
        </li>
      )
    };
  }


}

export default FeedElement;
