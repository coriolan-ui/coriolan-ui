/*globals MENU:true */
import React from 'react'

class Announcement extends React.Component {
  render() {
    let { courseId, announcementId } = this.props.params
    let { title, body } = MENU[courseId].announcements[announcementId]

    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    )
  }
}

module.exports = Announcement
