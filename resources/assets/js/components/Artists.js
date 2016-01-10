import React from 'react'
import Artist from 'components/Artist'
import fetch from 'isomorphic-fetch'

class Artists extends React.Component {
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
      return resp.json();
    })
    .then(resp => {
        let items = []
        resp.data.map(function(item) {
          items.push(
            <Artist
              key={item.id}
              {...item}
            />
          )
        })
        this.setState({
          loaded: true,
          items: items
        })
    });
  }

  render() {
    if (!this.state.loaded) {
      return <div className="container">Загрузка...</div>;
    } else {
      return (
        <div className="container">
          <h1>Artists</h1>
          {this.state.items}
        </div>
      )
    }
  }
}

Artists.defaultProps = {
  loaded: false,
  items: []
}

export default Artists
