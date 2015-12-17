import Radium from 'radium'
import React from 'react'
import { Link } from 'react-router'

class SidebarNav extends React.Component {
  render() {
    return (
      <div style={this.props.style}>

        <ul style={styles.ul}>
          <li><Link to="/game-hall" style={styles.a} activeStyle={selected}>Игровой зал</Link></li>
          <li><a style={styles.a}>Лотерея</a></li>
          <li><a style={styles.a}>Турниры</a></li>
          <li><a style={styles.a}>Акции</a></li>
          <li><a style={styles.a}>Магазин фишек</a></li>
          <li><a style={styles.a}>Новости</a></li>
          <li><a style={styles.a}>Видео</a></li>
          <li><a style={styles.a}>Скачать plug-in</a></li>
        </ul>
        
      </div>
    )
  }
}

const styles = {
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  a: {
    display: 'block',
    lineHeight: '45px',
  },
}

const selected = { color: '#f5a623' }

module.exports = Radium(SidebarNav)
