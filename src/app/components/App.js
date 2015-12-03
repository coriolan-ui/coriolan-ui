/*globals MENU:true */
import React from 'react'
import { Link } from 'react-router'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends React.Component {
  render() {
    return (
      <div>

        <Link to="/" style={{ 
          float: 'left',
          width: '100%'
         }} >Home</Link>

        <GlobalNav />

        <div style={{
          padding: 20,
          marginLeft: 300
        }}>
          {this.props.children || <Dashboard courses={MENU} />}
        </div>

      </div>
    )
  }
}

module.exports = App

