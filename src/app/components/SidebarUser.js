import Radium from 'radium'
import React from 'react'
import RetinaImage from 'react-retina-image'

import SidebarUserPromo from './SidebarUserPromo';
import SidebarUserAutorize from './SidebarUserAutorize';
import SidebarUserInfo from './SidebarUserInfo';

class SidebarUser extends React.Component {
  render() {
    return (
      <div style={this.props.style}>

        <div style={{display:'none'}}>
          <SidebarUserPromo style={styles.sidebarUserComponent} />
          <SidebarUserAutorize style={styles.sidebarUserComponent} />
        </div>
        <SidebarUserInfo style={styles.sidebarUserComponent} />

      </div>
    )
  }
}

let styles = {
  sidebarUserComponent: {
    marginBottom: '16px',
  },
}

module.exports = Radium(SidebarUser)
