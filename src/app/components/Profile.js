import React from 'react'
import { render } from 'react-dom'
import Radium from 'radium'

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Профиль</h1>
      </div>
    )
  }
}

module.exports = Radium(Profile)
