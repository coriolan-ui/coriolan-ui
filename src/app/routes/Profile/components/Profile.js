import React from 'react'

class Profile extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div>
        <h2>Профайл</h2>
        <div>ID: {user.id}</div>
        <div>Ник: {user.name}</div>
      </div>
    )
  }
}

Profile.defaultProps = {
  user: {
    id: '566039bb9b5e3676278b456e',
    name: 'Питухович'
  }
}

module.exports = Profile
