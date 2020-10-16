import React from 'react'
import ArticleItem from './ArticleItem'

class ArticleList extends React.Component {
  render() {
    return(
      this.props.articles.map((article, id) => (
        <div key={id}>
          <ArticleItem article={article}/>
        </div>
      ))
    )
  }
}


export default ArticleList
