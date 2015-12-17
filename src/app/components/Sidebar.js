import Radium from 'radium'
import React from 'react'

import SidebarLogo from './SidebarLogo';
import SidebarUser from './SidebarUser';
import SidebarNav from './SidebarNav';

class Sidebar extends React.Component {
  render() {
    return (
      <div style={[styles.sidebar, this.props.style]}>

        <SidebarLogo style={[ styles.sidebarComponent, styles.divider ]} />
        <SidebarUser style={[ styles.sidebarComponent, styles.divider ]} />
        <SidebarNav style={ styles.sidebarComponent } />

      </div>
    )
  }
}

let styles = {
  sidebar: {
    position: 'fixed',
    width: '300px',
    float: 'left',
    padding: '16px',
    marginRight: '-100%',
    boxSizing: 'border-box',
    display: 'none',
    zIndex: '20',

    '@media (min-width: 1054px)': {
      display: 'block',
    }
  },
  sidebarComponent: {
    marginBottom: '16px',
  },
  divider: {
    paddingBottom: '16px',
    borderBottom: '1px solid #dbdbdb',
  }
}

module.exports = Radium(Sidebar)
