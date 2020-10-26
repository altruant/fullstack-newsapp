import React from 'react'
import Cookies from 'js-cookie'

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      'title': '',
      'body': '',
      'image_url': '',
      'categories': '',
      'stage': '',
    }

    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/v1/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json()
    Cookies.set('Authorization', `Token ${data.key}`)
  }
  render() {
    let loginOutButton
    if(localStorage.getItem('login')) {
      loginOutButton = <button onClick={this.props.logOut}>Logout</button>
    } else {
      loginOutButton = <button>Login</button>
    }
    return(
      <React.Fragment>
        <div className="navbar">
          <div className="auth-links">
            {loginOutButton}
          </div>
        </div>
        <div className="header">
          <h2>Post Article</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input className='form-control' type="text" name='title' value={this.state.title} onChange={this.handleInput} placeholder='Title'/>
          </div>
          <div className='form-group'>
            <label htmlFor="body">Body</label>
            <textarea className='form-control' name="body" cols="30" rows="15" value={this.state.body} onChange={this.handleInput}></textarea>
          </div>
          <div className='form-group'>
          <label htmlFor="url">Image URL</label>
            <input className='form-control' type='url' name='image_url' value={this.state.image_url} onChange={this.handleInput} placeholder='https://example.com'/>
          </div>
          <div className="dropdowns form-group">
            <div className='category'>
              <label htmlFor="categories">Article Category</label>
                <select className='form-control' name="categories" value={this.state.categories} onChange={this.handleInput}>
                  <option value="">Select a Category</option>
                  <option value="Election 2020">Election 2020</option>
                  <option value="US News">US News</option>
                  <option value="World News">World News</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
            </div>
            <div className='stage'>
              <label htmlFor="stage">Publishing Stage</label>
                <select className='form-control' name="stage" value={this.state.stage} onChange={this.handleInput}>
                  <option value="">Select a Stage</option>
                  <option value="Draft">Draft</option>
                  <option value="Submitted">Submitted</option>
                </select>
            </div>
          </div>
        </form>
        <div className="submit-button">
        <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ArticleForm
