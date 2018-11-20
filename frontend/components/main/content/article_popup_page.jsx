import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../../actions/modal_actions';
import { createNewFavorite } from '../../../actions/feed_actions';

const elapsedTime = (datetime) => {
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

const ArticlePopupPage = (props) => {
  return (
    <div id="article-popup">
      <small className="next_prev_button" onClick={() =>
          props.openModal('article-popup-page',
          {article: props.articles[props.index - 1], index: (props.index - 1)})}>

        <img src={window.left_arrow} alt="left_arrow"/>
      </small>

      <small className="next_prev_button" onClick={() =>
          props.openModal('article-popup-page',
          {article: props.articles[props.index + 1], index: (props.index + 1)})}>

        <img src={window.right_arrow} alt="right_arrow"/>
      </small>

      <header className="article-header">
        <span className="title">{props.article.title}</span>
        <br/>
        <span className="by-line">
          {props.article.author ?
            "by " + `${props.article.author}` + " / " : ""
          }
          {elapsedTime(props.article.publishedAt)}
          /
          <a>Read Later</a>
        </span>
      </header>

      <small className="img-box">
        <img src={props.article.urlToImage} alt="article_thumbnail"/>
      </small>

      <div className="description">{props.article.content}</div>

      <button onClick={() => window.open(props.article.url, "_blank")}>VISIT WEBSITE</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.entities.articles
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, optional_props) =>
    dispatch(openModal(modal, optional_props)),
  createNewFavorite: (article) => dispatch(createNewFavorite(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePopupPage);
