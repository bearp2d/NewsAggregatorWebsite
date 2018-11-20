import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import FeedElement from './feed_element';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: null};
  }

  componentDidMount() {
    this.props.fetchAllFeeds().then(() =>
      this.props.fetchAllSources())
  }

  renderFeedLis() {
    return Object.values(this.props.feeds).map((feed) => {
      return <FeedElement feed={feed} />
    });
  }

  render() {
    return (
      <div id="sidebar">

        <ul id="links-ul">

          <Link to="/my" style={{ textDecoration: 'none' }}>
            <li className="feed-li" key={"today-link"}>
              <header>
                <small className="img-box">
                  <img src={window.today_icon} alt="today_icon"/>
                </small>
                <span className="title">Today</span>
              </header>
            </li>
          </Link>

          <Link to="/saved" style={{ textDecoration: 'none' }}>
            <li className="feed-li" key={"later-link"}>
              <header>
                <small className="img-box">
                  <img src={window.bookmark_icon} alt="bookmark_icon"/>
                </small>
                <span className="title">Read Later</span>
              </header>
            </li>
          </Link>

        </ul>

        <ul id="feeds-ul">

          <header id="feeds-header" key={"feeds-header"}>
            <span>FEEDS</span>
            <small className="img-box">
              <img src={window.settings_icon} alt="settings_icon"/>
            </small>
          </header>

          <Link to="/latest" style={{ textDecoration: 'none' }}>
            <li className="feed-li" key={"all-link"}>
              <header>
                <small className="img-box">
                  <img src={window.hamburger_menu} alt="hamburger_menu"/>
                </small>
                <span className="title">All</span>
              </header>
            </li>
          </Link>

          {this.renderFeedLis()}

          <li id="add-feed" className="feed-li" key={"new-feed-footer"}
            onClick={() => this.props.openModal('new-feed-form')}>
            <header>Create New Feed</header>
          </li>
        </ul>

        <Link to="/discover" style={{ textDecoration: 'none' }}>
          <div id="new-content-button">
            <small className="img-box">
              <img src={window.plus_icon} alt="plus_icon"/>
            </small>

            <span className="title">Add Content</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default SideBar;
