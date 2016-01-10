import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Music Database</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="/artists">Artists</a></li>
            <li><a href="/labels">Labels</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
