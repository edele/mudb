import React from 'react'
import LabelItem from 'components/LabelItem'
import fetch from 'isomorphic-fetch'

class LabelsIndex extends React.Component {
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
            <LabelItem
              key={item.id}
              {...item}
            />
          ))}
        </div>
      )
    }
  }
}

LabelsIndex.defaultProps = {
  loaded: false,
  items: []
}

export default LabelsIndex
