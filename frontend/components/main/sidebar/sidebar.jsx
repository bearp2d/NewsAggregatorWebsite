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



        <section id="feeds">

          <header id="feeds-header">
            <h4>Feeds</h4>
            <span>settings placeholder**</span>
          </header>

          <ul id="feeds-ul">
            <li key={0}>All</li>
            {this.renderFeedLis()}
          </ul>
        </section>
      </div>
    )
  }
}

export default SideBar;
