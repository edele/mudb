import React from 'react'
import Artists from 'components/Artists'
import Header from 'components/Header'

export default React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
})
