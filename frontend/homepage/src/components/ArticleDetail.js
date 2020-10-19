import React from 'react';
import e2020 from '../assets/e2020.png'
import entertainment from '../assets/entertainment.png'
import arrowDown from '../assets/arrow-down.svg'
class ArticleDetail extends React.Component {


  render() {
    let icon = ''
    switch (this.props.article.categories) {
      case 'Election 2020':
        icon = e2020;
        break;
      case 'Entertainment':
        icon = entertainment
        break;
      default:
        icon = ''
    }
    return(
      <div className="article-detail">
        <div className="article-header">
          <img className='detail-img' src={this.props.article.image_url} style={{maxWidth: '100%'}} alt="#"/>
          <h3>{this.props.article.title}</h3>
          <div className="article-header-bottom">
            <div className="icon-categories">
              <img src={icon} alt="#" className="icon"/>
              <h3>{this.props.article.categories}</h3>
            </div>
            <div className="arrow">
              <img src={arrowDown} alt='#' className='arrow-down'/>
            </div>
          </div>
          <span>Posted on {this.props.article.created}</span>
          <span>Modified at {this.props.article.modified}</span>
        </div>
        <div className='article-body'>
          <p>{this.props.article.body}</p>
        </div>
      </div>
    )
  }
}

export default ArticleDetail
