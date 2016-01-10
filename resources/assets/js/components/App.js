import React from 'react'
import Header from 'components/Header'
import Artists from 'components/Artists'

export default React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <Artists />
      </div>
    );
  }
});
