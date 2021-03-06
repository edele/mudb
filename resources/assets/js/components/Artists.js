import React from 'react'
import ArtistItem from 'components/ArtistItem'
import fetch from 'isomorphic-fetch'

class Artists extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <div className="container">
        <h1>Artists</h1>
        {this.props.children}
      </div>
    )
  }
}

Artists.defaultProps = {
  loaded: false,
  items: []
}

export default Artists
