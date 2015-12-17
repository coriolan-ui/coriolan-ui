import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'

import Main from './components/Main'
import Index from './components/Index'
import Profile from './components/Profile'
import GameHall from './components/GameHall'

window.React = React;

injectTapEventPlugin();

const history = useBasename(createHistory)({
  basename: '/'
})

const selected = { color: '#f5a623' }

render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/game-hall" component={GameHall}/>
    </Route>
  </Router>
), document.getElementById('app'))

