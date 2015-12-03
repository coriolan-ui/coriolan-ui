import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main.js';

render(
  <Main />,
  document.getElementById('app')
)
