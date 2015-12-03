/*globals MENU:true */
import React from 'react'

class Assignment extends React.Component {
  render() {
    let { courseId, assignmentId } = this.props.params
    let { title, body } = MENU[courseId].assignments[assignmentId]

    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    )
  }
}

module.exports = Assignment
