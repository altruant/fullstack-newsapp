import React from 'react'
import ArticleDetail from './ArticleDetail.js'

class LastWeek extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return (
        this.props.articles.filter(article => this.props.cat ? article.categories === this.props.cat : article)
          .filter(article => article.isTopNews === false)
          .map((article, id) => (
            <div className='not-top-news' key={id}>
              <ArticleDetail article={article}/>
            </div>
      ))
    )
  }
}

export default LastWeek
