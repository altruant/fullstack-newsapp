import React from 'react'
import ArticleTitle from './ArticleTitle.js'
import ArticleDetail from './ArticleDetail.js'

class ArticleList extends React.Component {
  render() {
    return (
      this.props.articles.filter(article => article.isTopNews === false).map((article, id) => (
        <div key={id}>
          <ArticleTitle article={article}/>
          <ArticleDetail article={article}/>
        </div>
      ))
    )
  }
}

export default ArticleList
