import React from 'react';
import Cookies from 'js-cookie';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      username: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/api/v1/rest-auth/login/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    Cookies.set('Authorization', `Token ${data.key}`)
    localStorage.setItem('login', data.key)

  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="Username"/>
          <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password1} onChange={this.handleInput} placeholder="Password"/>
          <button type='submit'>Login</button>
        </form>
    )
  }
}

export default LoginForm
