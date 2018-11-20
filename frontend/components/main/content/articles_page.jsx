import React from 'react';
import { Link } from 'react-router-dom';

import ArticleElement from './article_element';

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllFeeds().then(
      this.props.fetchAllSources()).then(
      this.props.fetchRelevantArticles(this.props.sourceList));
  }

  componentDidUpdate(oldProps) {
    if (this.props.title !== oldProps.title){
      this.props.fetchRelevantArticles(this.props.sourceList);
    }
  }

  renderArticleLis() {
    return this.props.articles.map((article, idx) => {
      return (
          <ArticleElement article={article} index={idx} key={idx}/>
      );
    });
  }

  render() {
    return (
      <>
        <header id="articles-page-header">
          <h1 className="title">{this.props.title}</h1>
          <span className="description">{this.props.info}</span>
        </header>

        <ul id={this.props.contentType}>
          {this.renderArticleLis()}
        </ul>
      </>
    )
  }
}

export default ArticlesPage;
