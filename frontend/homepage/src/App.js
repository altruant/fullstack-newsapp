import React from 'react';
// import NavHeader from './components/NavHeader.js';
import TopNews from './components/TopNews.js'
import ArticleList from './components/ArticleList.js'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/')
      .then(response => response.json())
      .then(data => this.setState({ articles: data }))
      .catch(error => console.log('Error', error))
  }
  render() {
    return (
      <div className="container">
        <div className="top-articles">
          <h2>Top Articles</h2>
          <TopNews articles={this.state.articles}/>
        </div>
        <div className="last-week">
          <ArticleList articles={this.state.articles} />
        </div>

      </div>
    );
  }
}

export default App;
