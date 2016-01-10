import React from 'react'

class Artist extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
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
    return (
      <div className="artist">
        <h3>{this.state.name}</h3>
        <div><b>Origin:</b> {this.state.origin}</div>
        <div><b>Active:</b> {this.getActiveYears()}</div>
      </div>
    )
  }
}

Artist.propTypes = {
  activeFrom: React.PropTypes.string.isRequired,
  activeTo: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  origin: React.PropTypes.string.isRequired
}

export default Artist
