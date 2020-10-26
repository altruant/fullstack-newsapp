import React from 'react';
import Base from './components/BaseView/index.js'
import ArticleForm from './components/Forms/ArticleForm.js';
import LoginForm from './components/Forms/LoginForm.js'
import RegisterForm from './components/Forms/RegisterForm.js'
import './App.css';
import Cookies from 'js-cookie'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      articles: [],
      cat: null,
      isLoggedIn: false,
      isChanging: false,
    }
    this.articleFilter = this.articleFilter.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  articleFilter(e) {
    // console.log(e.target.dataset.filter)
    if(e.target.dataset.filter === 'all'){
      this.setState( {cat: null})
    } else {
      this.setState( {cat: e.target.dataset.filter} )
    }
  }

  async logOut() {
    const response = await fetch('/api/v1/rest-auth/logout/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    Cookies.remove('Authorization')
    localStorage.removeItem('login')
    this.setState({isLoggedIn: false})
  }

  componentDidMount() {
    fetch('/api/v1/')
      .then(response => response.json())
      .then(data => this.setState({ articles: data }))
      .catch(error => console.log('Error', error))
    if(localStorage.getItem('login')) {
      this.setState( {isLoggedIn: true} )
    }
  }
  render() {
      if(localStorage.getItem('login')) {
        return(
          <React.Fragment>
            <ArticleForm logOut={this.logOut}/>
          </React.Fragment>)
      } else  {
        return(
          <React.Fragment>
            <Base articles={this.state.articles} cat={this.state.cat} articleFilter={this.articleFilter}/>
            <LoginForm />
            <RegisterForm />
          </React.Fragment>)
      }
  }
}

export default App;
