import React from 'react';

class ArticleDetail extends React.Component {
  render() {
    return(
      <div className="card-body">
        <img src={this.props.article.image_url} alt="#"/>
        <h3>{this.props.article.title}</h3>
        <span>{this.props.article.categories}</span>
        <p>{this.props.article.body}</p>
        <span>Posted on {this.props.article.created}</span>
        <span>Modified at {this.props.article.modified}</span>
      </div>
    )
  }
}

class ArticleTitle extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h3>{this.props.article.title}</h3>
      </div>
    )
  }
}

export default ArticleDetail
export { ArticleTitle }
