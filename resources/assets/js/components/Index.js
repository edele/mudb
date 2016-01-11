import React from 'react'
import {Link} from 'react-router'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <h3>Music Database</h3>
        <p>Information about <Link to="artists">artists</Link> and <Link to="labels">labels</Link></p>
      </div>
    )
  }
}

export default Index
