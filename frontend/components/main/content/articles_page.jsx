import React from 'react';
import ReactDOM from 'react-dom';
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
    this.props.fetchRelevantArticles(this.props.sourceList,
      this.props.searchQuery, this.state.page);

    window.scrollTo({top: 0, behavior: "smooth"});
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.url !== oldProps.match.url) {
      this.props.fetchRelevantArticles(this.props.sourceList,
        this.props.searchQuery, this.state.page);

      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }

  updatePage() {
    this.setState({page: this.state.page + 1});
    this.props.updateRelevantArticles(this.props.sourceList,
      this.props.searchQuery, this.state.page);
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

        {this.props.saved ? null : <div className="loader"></div>}
      </>
    )
  }
}

export default ArticlesPage;
