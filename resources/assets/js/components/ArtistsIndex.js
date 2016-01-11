import React from 'react'
import ArtistItem from 'components/ArtistItem'
import fetch from 'isomorphic-fetch'

class ArtistsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.fetch()
  }

  fetch() {
    fetch('/api/v1/artists')
    .then(resp => {
      if (resp.status >= 400) {
        throw new Error('Bad response from server')
      }
      return resp.json()
    })
    .then(resp => {
      this.setState({
        loaded: true,
        items: resp.data
      })
    })
  }

  render() {
    if (!this.state.loaded) {
      return <div className="container">Loading...</div>
    } else {
      return (
        <div>
          {this.state.items.map(item => (
            <ArtistItem
              key={item.id}
              {...item}
            />
          ))}
        </div>
      )
    }
  }
}

ArtistsIndex.defaultProps = {
  loaded: false,
  items: []
}

export default ArtistsIndex
