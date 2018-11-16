import React from 'react';

import FeedElement from './feed_element';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllFeeds().then(() => {
      Object.keys(this.props.feeds).forEach((feed_id) => {
        this.setState({ [feed_id]: "inactive"})
      });
    });
  }

  componentDidUpdate(oldProps) {
    //I may need to put logic here for updating the sidebar when a
    //feed is created/destroyed (length of feeds object??)
  }

  renderFeedLis() {
    //temporary fix before I implement sources
    return Object.values(this.props.feeds).map((feed) => {
      return <FeedElement feed={feed} />
    });
  }

  render() {
    return (
      <div id="sidebar">

        <ul id="feeds-ul">

          <header id="feeds-header">
            <span>FEEDS</span>
            <small className="img-box">
              <img src={window.settings_icon} alt="settings_icon"/>
            </small>
          </header>

          <li className="feed-li" key={0}>
            <header>
              <small className="img-box">
                <img src={window.hamburger_menu} alt="hamburger_menu"/>
              </small>
              <span className="title">All</span>
            </header>
          </li>

          {this.renderFeedLis()}

          <li id="add-feed" className="feed-li" key={"new-feed-footer"}
            onClick={() => this.props.openModal('new-feed-form')}>
            <header>Create New Feed</header>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideBar;
