import React from 'react'
import Navbar from './Navbar.js'
import TopNews from './TopNews.js'
import LastWeek from './LastWeek.js'

class Base extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navbar articleFilter={this.props.articleFilter}/>
        <div className="row">
          <div className="col-6">
            <h2 className='top'>Top Articles</h2>
            <TopNews cat={this.props.cat} articles={this.props.articles}/>
          </div>
          <div className="col-6">
            <h2 className='this-week'>Posted This Week</h2>
            <LastWeek cat={this.props.cat} articles={this.props.articles} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Base
