import React from 'react'
import {Link} from 'react-router'

class LabelItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <h3><Link to={`/labels/${this.state.id}`}>{this.state.name}</Link></h3>
    )
  }
}

LabelItem.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default LabelItem
