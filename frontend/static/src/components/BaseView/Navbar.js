import React from 'react'



class Navbar extends React.Component{
    render() {
        return (
          <React.Fragment>
            <div className='navbar'>
              <button onClick={this.props.articleFilter} data-filter='all' className='home'>Home</button>
              <button onClick={this.props.articleFilter} data-filter='Election 2020' className='election'>Election 2020</button>
              <button onClick={this.props.articleFilter} data-filter='US News' className='US'>US News</button>
              <button onClick={this.props.articleFilter} data-filter='World News' className='World'>World News</button>
              <button onClick={this.props.articleFilter} data-filter='Entertainment' className='Entertainment'>Entertainment</button>
              <div className="auth-links">
                <a href="#">Login</a>
                <span>&#124;</span>
                <a href="#">Register</a>
              </div>
            </div>

          </React.Fragment>
        );
    }
}

export default Navbar
