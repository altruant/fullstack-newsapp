import React from 'react'
import ArticleTitle from './ArticleTitle.js'
import ArticleDetail from './ArticleDetail.js'

class LastWeek extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: '',
    }
  }
  render() {
    return (
      this.props.articles.filter(article => article.isTopNews === false).map((article, id) => (
        <div key={id} className='container'>
          <ArticleTitle article={article}/>
          <div className='custom-modal'>
            <ArticleDetail display={this.state.display} article={article}/>
          </div>
        </div>
      ))
    )
  }
}

export default LastWeek
