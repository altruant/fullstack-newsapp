import React from 'react';
import Base from './components/BaseView/index.js'
import MyArticles from './components/MyArticles.js'
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
      loginForm: false,
      registerForm: false,
    }
    this.articleFilter = this.articleFilter.bind(this)
    this.logOut = this.logOut.bind(this)
    this.logIn = this.logIn.bind(this)
    this.loginForm = this.loginForm.bind(this)

  }


  articleFilter(e) {
    // console.log(e.target.dataset.filter)
    if(e.target.dataset.filter === 'all'){
      this.setState( {cat: null})
    } else {
      this.setState( {cat: e.target.dataset.filter} )
    }
  }

  async logIn(e, login) {
    e.preventDefault();
    const response = await fetch('/api/v1/rest-auth/login/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login)
    });

    const data = await response.json();
    Cookies.set('Authorization', `Token ${data.key}`)
    localStorage.setItem('login', data.key)
    this.setState({isLoggedIn: true, loginForm: false, registerForm: false})
  }

  loginForm() {
    this.setState({loginForm: true})
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

  }
  render() {
      if(Cookies.get('Authorization')) {
        return(
          <React.Fragment>
            <ArticleForm logOut={this.logOut}/>
            <MyArticles />
          </React.Fragment>)

      } else {
        return(
          <React.Fragment>
            <Base articles={this.state.articles} cat={this.state.cat} articleFilter={this.articleFilter}/>
            <LoginForm logIn={this.logIn}/>
            <RegisterForm logIn={this.logIn}/>
          </React.Fragment>)
      }
  }
}

export default App;
