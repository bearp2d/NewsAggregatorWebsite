import React from 'react';
import { Link } from 'react-router-dom';

import ArticleElement from './article_element';

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRelevantArticles();
  }

  renderArticleLis() {
    return this.props.articles.map((article, idx) => {
      return (
          <ArticleElement article={article} key={idx} />
      );
    });
  }

  render() {
    return (
      <>
        <header>
          <h1 className="title">{this.props.title}</h1>
          <span className="description">{this.props.info}</span>
        </header>

        <ul id={this.props.contentType}>
          {this.renderArticleLis()};
        </ul>
      </>
    )
  }
}

export default ArticlesPage;
