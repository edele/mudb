import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Music Database</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link activeClassName="active" to="/artists">Artists</Link></li>
            <li><Link activeClassName="active" to="/labels">Labels</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
})
