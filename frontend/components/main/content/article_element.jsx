import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../../actions/modal_actions';

class ArticleElement extends React.Component {
  constructor(props) {
    super(props);

    this.articleElementStyle = this.articleElementStyle.bind(this);

    window.addEventListener('storage', () => {
      this.forceUpdate();
    })
  }

  elapsedTime(datetime) {
    const articlePublishedDate = new Date(datetime);
    const presentDate = new Date();
    const timeDiffHours = parseInt((presentDate - articlePublishedDate)
                            /(1000*60*60));

    if (timeDiffHours < 24) {
      return String(timeDiffHours) + "h"
    } else {
      const timeDiffDays = parseInt(timeDiffHours/24);
      return String(timeDiffDays) + "d"
    }
  }

  articleElementStyle() {
    if (sessionStorage.getItem(this.props.article.url) &&
      this.props.saved === false) {
      return {color: "lightgray", filter: "opacity(60%)"}
    }
  }

  render() {
    return (
      <li className="article-li"
        onClick={() => this.props.openModal('article-popup-page',
          {article: this.props.article, index: this.props.index,
            saved: this.props.saved})}>

        <small className="img-box"
          style={this.articleElementStyle()}>
          <img src={this.props.article.urlToImage} alt="article_thumbnail"
            onError={(e) => e.target.src=`${window.favicon}`}/>
        </small>

        <header className="article-header">
          <span className="title"
            style={this.articleElementStyle()}>
            {this.props.article.title}
          </span>
          <br/>
          <span className="by-line">
            {(this.props.path !== "/subscription/:sourceId") ?
              `${this.props.article.source.name + " /"}` :
              null
            }
            {this.props.article.author ?
              "by " + `${this.props.article.author}` + " / " : ""
            }
            {this.elapsedTime(this.props.article.publishedAt)}
          </span>
          <div className="description">{this.props.article.description}</div>
        </header>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, optional_props) =>
    dispatch(openModal(modal, optional_props))
  });

export default connect(
  null,
  mapDispatchToProps
)(ArticleElement);
