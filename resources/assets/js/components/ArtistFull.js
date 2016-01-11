import React from 'react'
import fetch from 'isomorphic-fetch'
import {Link} from 'react-router'

class ArtistFull extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.fetch()
  }

  fetch() {
    fetch(`/api/v1/artists/${this.props.params.id}`)
    .then(resp => {
      if (resp.status >= 400) {
        throw new Error('Bad response from server')
      }
      return resp.json()
    })
    .then(resp => {

      this.setState({
        ...resp,
        loaded: true
      })
    })
  }

  getActiveYears() {
    let from = this.state.activeFrom.substring(0, 4)
    let to

    if (this.state.activeTo) {
      to = this.state.activeTo.substring(0, 4)
    } else {
      to = 'now'
    }

    return `${from} — ${to}`
  }

  render() {
    if (!this.state.loaded) {
      return <div className="container">Loading...</div>
    } else {
      return (
        <div className="artist">
          <h3>{this.state.name}</h3>
          <div><b>Origin:</b> {this.state.origin}</div>
          <div><b>Active:</b> {this.getActiveYears()}</div>
          <div><b>Labels:</b></div>
          <ul>
            {this.state.labels.map(item => (
              <li key={item.id}><Link to={`/labels/${item.id}`}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

ArtistFull.defaultProps = {
  loaded: false
}

export default ArtistFull
