import React from 'react'
import ArticleDetail from './BaseView/ArticleDetail.js'
class MyArticles extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      articles: []
    }
  }
  componentDidMount(){
    fetch('/api/v1/articles/user')
      .then(response => response.json())
      .then(data => this.setState({articles: data}))
      .catch(error => console.log('Error', error))
  }
  render() {
    return(
      this.state.articles.map((article, index) => {
        return <ArticleDetail key={index} article={article} />
      })
    )
  }
}

export default MyArticles
