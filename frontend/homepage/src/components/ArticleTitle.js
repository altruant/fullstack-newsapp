import React from 'react'


class ArticleTitle extends React.Component {
  render() {
    return (
      <div className="card-body article-title">
        <h3>{this.props.article.title}</h3>
      </div>
    )
  }
}

export default ArticleTitle
