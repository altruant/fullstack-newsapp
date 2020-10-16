import React from 'react'
import ArticleDetail from './ArticleItems.js'

class TopNews extends React.Component {
  render() {
    return(
      this.props.articles.filter(article => article.isTopNews === true).map((article, id) => (
        <div key={id}>
          <ArticleDetail article={article}/>
        </div>
      ))
    )
  }
}


export default TopNews
