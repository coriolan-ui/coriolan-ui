import React from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  overflow: 'hidden',
  background: dark,
  color: light,
  width: '300px',
  float: 'left'
}

styles.link = {
  padding: 11,
  color: light,
  display: 'block'
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    console.log('Logouting');
  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>

        <ul style={{ 
          listStyle: 'none',
          margin: 0,
          padding: 0
         }} >
          <li>
            <Link to="/profile" style={styles.link} activeStyle={styles.activeLink}>{user.name}</Link>
            <button onClick={this.logOut}>Выйти</button>
          </li>
          <li><Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>Игровой Зал</Link></li>
          <li><Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>Лотерея</Link></li>
          <li><Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Турниры</Link></li>
          <li><Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Акции</Link></li>
          <li><Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Магазин фишек</Link></li>
          <li><Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Новости</Link></li>
          <li><Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Видео</Link></li>
          <li><Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Скачать plug-in</Link></li>
        </ul>
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: '566039bb9b5e3676278b456e',
    name: 'Питухович'
  }
}

export default GlobalNav
