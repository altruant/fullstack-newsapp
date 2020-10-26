import React from 'react'
import ArticleDetail from './ArticleDetail.js'

class TopNews extends React.Component {
  render() {
    return (
        this.props.articles.filter(article => this.props.cat ? article.categories === this.props.cat : article)
          .filter(article => article.isTopNews === true)
          .map((article, id) => (
            <div className='top-news' key={id}>
              <ArticleDetail article={article}/>
            </div>
      ))
    )
  }
}


export default TopNews
