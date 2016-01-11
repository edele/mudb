import React from 'react'
import MusicLabel from 'components/MusicLabel'
import fetch from 'isomorphic-fetch'

class MusicLabels extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.fetch()
  }

  fetch() {
    fetch('/api/v1/labels')
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
            <MusicLabel
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
      return <div className="container">Loading...</div>;
    } else {
      return (
        <div className="container">
          <h1>Music labels</h1>
          {this.state.items}
        </div>
      )
    }
  }
}

MusicLabels.defaultProps = {
  loaded: false,
  items: []
}

export default MusicLabels
