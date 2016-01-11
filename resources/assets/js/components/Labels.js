import React from 'react'
import ArtistItem from 'components/ArtistItem'
import fetch from 'isomorphic-fetch'

class Labels extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <div className="container">
        <h1>Labels</h1>
        {this.props.children}
      </div>
    )
  }
}

Labels.defaultProps = {
  loaded: false,
  items: []
}

export default Labels
