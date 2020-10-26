import React from 'react';
import Cookies from 'js-cookie';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/api/v1/rest-auth/registration/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    console.log(data)
    Cookies.set('Authorization', `Token ${data.key}`)

  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="username">Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="Username"/>
          <label htmlFor="email">Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email"/>
          <label htmlFor="password1">Password</label>
            <input type="password" name="password1" value={this.state.password1} onChange={this.handleInput} placeholder="Password"/>
          <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" value={this.state.password2} onChange={this.handleInput} placeholder=""/>
          <button type='submit'>Register</button>
        </form>
    )
  }
}

export default RegisterForm
