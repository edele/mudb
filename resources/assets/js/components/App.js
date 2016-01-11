import React from 'react'
import Header from 'components/Header'
import Artists from 'components/Artists'
import MusicLabels from 'components/MusicLabels'

export default React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <Artists />
        <MusicLabels />
      </div>
    );
  }
});
