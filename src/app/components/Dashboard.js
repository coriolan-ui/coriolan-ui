import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
