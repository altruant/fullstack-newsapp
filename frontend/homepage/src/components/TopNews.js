import React from 'react'
import ArticleItem from './ArticleItem'

class TopNews extends React.Component {
  render() {
    return(
      this.props.articles.filter(article => article.isTopNews == true).map((article, id) => (
        <div key={id}>
          <ArticleItem article={article}/>
        </div>
      ))
    )
  }
}


export default TopNews
