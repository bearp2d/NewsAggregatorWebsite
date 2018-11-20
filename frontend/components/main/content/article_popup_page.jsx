import React from 'react';

const ArticlePopupPage = ({ article, elapsedTime }) => {
  return (
    <div id="article-popup">
      <header className="article-header">
        <span className="title">{article.title}</span>
        <br/>
        <span className="by-line">
          {article.author ?
            "by " + `${article.author}` + " / " : ""
          }
          {elapsedTime}
          / keep unread // hide
        </span>
      </header>

      <small className="img-box">
        <img src={article.urlToImage} alt="article_thumbnail"/>
      </small>

      <div className="description">{article.description}</div>

      <button onClick={() => window.open(article.url, "_blank")}>VISIT WEBSITE</button>
    </div>
  );
};

export default ArticlePopupPage;
