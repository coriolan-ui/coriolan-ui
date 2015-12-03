import React from 'react'

class Calendar extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'first due' },
      { id: 1, title: 'second due' }
    ]

    return (
      <div>
        <h2>Calendar</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Calendar
