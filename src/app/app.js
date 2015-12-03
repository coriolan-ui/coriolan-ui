/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import stubbedCourses from './stubs/COURSES'

const history = useBasename(createHistory)({
  basename: '/'
})

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  } ]
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('app')
)
