import React from 'react'
import ArticleTitle from './ArticleItems.js'

class ArticleList extends React.Component {
  render() {
    return (
      this.props.article.filter(article => article.isTopNews === false).map((article, id) => (
        <div key={id}>
          <ArticleTitle article={article}/>
        </div>
      ))
    )
  }
}

export default ArticleList
