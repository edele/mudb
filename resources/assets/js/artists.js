import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import App from 'components/App'
import Artists from 'components/Artists'
import ArtistsIndex from 'components/ArtistsIndex'
import ArtistFull from 'components/ArtistFull'
import Labels from 'components/Labels'
import LabelsIndex from 'components/LabelsIndex'
import LabelFull from 'components/LabelFull'
import Index from 'components/Index'
import NoMatch from 'components/NoMatch'

render((
    <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={Index}/>
        <Route component={Artists} path="artists">
          <IndexRoute component={ArtistsIndex} />
          <Route component={ArtistFull} path=":id"/>
        </Route>
        <Route component={Labels} path="labels">
          <IndexRoute component={LabelsIndex} />
          <Route component={LabelFull} path=":id"/>
        </Route>
        <Route component={NoMatch} path="*"/>
      </Route>
    </Router>
  ), document.getElementById('app'))
