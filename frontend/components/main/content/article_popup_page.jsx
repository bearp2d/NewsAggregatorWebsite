import React from 'react';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../../actions/modal_actions';
import { createNewFavorite, deleteFavorite } from '../../../actions/feed_actions';


class ArticlePopupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {buttonDisabled: false}
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
      <div id="article-popup">

        <header className="article-header">
          <span className="title">{this.props.article.title}</span>
          <br/>
          <span className="by-line">
            {this.props.article.author ?
              "by " + `${this.props.article.author}` + " / " : ""
            }
            {`${this.elapsedTime(this.props.article.publishedAt)}` + " "}
            /
            {this.props.saved ?
              (
                <button id="save-delete-button" disabled={this.state.buttonDisabled}
                  onClick={() => {
                    this.props.deleteFavorite(this.props.article.id).then(
                      res => this.props.closeModal())
                  }
                }>
                  Remove from Favorites
                </button>
              ) : (
                <button id="save-delete-button" disabled={this.state.buttonDisabled}
                  onClick={() => {
                    this.props.createNewFavorite(this.props.article).then(
                    res => this.setState({buttonDisabled: true}))
                  }
                }>
                  Read Later
                </button>
              )
            }
          </span>
        </header>

        <div className="img-box">
          { (this.props.index !== 0) ?
            (<small className="next_prev_button" id="prev-button"
            onClick={() => this.props.openModal('article-popup-page',
              {article: this.props.articles[this.props.index - 1],
                index: (this.props.index - 1)})}>

              <img src={window.left_arrow} alt="left_arrow"/>
            </small>) : null
          }

          { (this.props.index !== this.props.articles.length - 1) ?
            (<small className="next_prev_button" id="next-button"
            onClick={() => this.props.openModal('article-popup-page',
              {article: this.props.articles[this.props.index + 1],
                index: (this.props.index + 1)})}>

              <img src={window.right_arrow} alt="right_arrow"/>
            </small>) : null
          }

          <img src={this.props.article.urlToImage} alt="article_thumbnail"/>
        </div>

        <div className="description">{this.props.article.content}</div>

        <button id="link-button" onClick={
          () => window.open(this.props.article.url, "_blank")
        }>
          VISIT WEBSITE
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  articles: state.entities.articles
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, optional_props) =>
    dispatch(openModal(modal, optional_props)),
  closeModal: () => dispatch(closeModal()),
  createNewFavorite: (article) => dispatch(createNewFavorite(article)),
  deleteFavorite: (articleId) => dispatch(deleteFavorite(articleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePopupPage);
