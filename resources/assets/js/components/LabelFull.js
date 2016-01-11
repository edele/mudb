import React from 'react'
import fetch from 'isomorphic-fetch'
import {Link} from 'react-router'

class LabelFull extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.fetch()
  }

  fetch() {
    fetch(`/api/v1/labels/${this.props.params.id}`)
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
        <div>
          <h3>{this.state.name}</h3>
          <ul>
            {this.state.artists.map(item => (
              <li key={item.id}><Link to={`/artists/${item.id}`}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

LabelFull.defaultProps = {
  loaded: false
}

export default LabelFull
