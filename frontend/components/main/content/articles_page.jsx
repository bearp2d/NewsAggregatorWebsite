import React from 'react';
import { Link } from 'react-router-dom';

import ArticleElement from './article_element';

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};

    this.updatePage = this.updatePage.bind(this);
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop
        === document.getElementById('main').offsetHeight) {
          this.updatePage();
      }
    };
  }

  componentDidMount() {
    this.props.fetchAllFeeds().then(
      this.props.fetchAllSources()).then(
      this.props.fetchRelevantArticles(this.props.sourceList, this.state.page));
  }

  componentDidUpdate(oldProps) {
    if (this.props.title !== oldProps.title){
      this.props.fetchRelevantArticles(this.props.sourceList, this.state.page);
    }
  }

  updatePage() {
    this.setState({page: this.state.page + 1});
    this.props.updateRelevantArticles(this.props.sourceList, this.state.page);
  }

  renderArticleLis() {
    return this.props.articles.map((article, idx) => {
      return (
          <ArticleElement article={article} index={idx}
            saved={this.props.saved} key={idx}/>
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
