import React from 'react'

class MusicLabel extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <h3>{this.state.name}</h3>
    )
  }
}

MusicLabel.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default MusicLabel
