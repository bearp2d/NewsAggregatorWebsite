import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../../actions/modal_actions';

class ArticleElement extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <li className="article-li"
        onClick={() => this.props.openModal('article-popup-page',
          {article: this.props.article, index: this.props.index})}>

        <small className="img-box">
          <img src={this.props.article.urlToImage} alt="article_thumbnail"/>
        </small>

        <header className="article-header">
          <span className="title">{this.props.article.title}</span>
          <br/>
          <span className="by-line">
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
