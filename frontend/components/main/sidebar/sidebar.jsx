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

    this.handleSwipe();
  }

  componentWillUnmount() {
    this.removeSwipeHandler();
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
            <small className="img-box"
              onClick={() => this.props.openModal('delete-feed-form')}>
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

        <div id="pull-button">
          <img src={window.right_arrow} alt="right_arrow"/>
        </div>
      </div>
    )
  }

  handleSwipe() {
    let touchStartX;
    let touchStartY;
    let touchEndX;
    let touchEndY;

    const sidebar = document.getElementById('sidebar');

    window.addEventListener('touchstart', e => logTouchStart(e));
    window.addEventListener('touchend', e => logTouchEnd(e));

    window.addEventListener('scroll', (e) => removeActiveClass(e));

    const logTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;

      console.log(touchStartX, touchStartY);
    }

    const logTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;

      handleGesture(e);
    }

    const handleGesture = (e) => {
      if ((touchEndX > touchStartX + 100) &&
          (Math.abs(touchStartY - touchEndY) < 50)) {

        sidebar.classList.add('sidebar-active');
      }

      if ((touchEndX < touchStartX - 100) &&
          (Math.abs(touchStartY - touchEndY) < 50)) {

        sidebar.classList.remove('sidebar-active');
      }

      if (touchStartY < 250 || touchEndY < 250) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
      }
    };

    const removeActiveClass = () => {
        sidebar.classList.remove('sidebar-active');
    };
  }


  removeSwipeHandler() {
    window.removeEventListener('touchstart', e => logTouchStart(e));
    window.removeEventListener('touchend', e => logTouchEnd(e));

    window.addEventListener('onscroll', (e) => removeActiveClass(e));
  }

}

export default SideBar;
