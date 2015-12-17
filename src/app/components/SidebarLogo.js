import Radium from 'radium'
import React from 'react'
import RetinaImage from 'react-retina-image'
import { IndexLink } from 'react-router'

class SidebarLogo extends React.Component {
  render() {
    return (
      <div style={[ this.props.style, styles.logo]} >

        <IndexLink to="/">
          <RetinaImage src={["./img/brand/site-logo.png", "./img/brand/site-logo@2x.png"]}
            alt="Site Logo"
            style={styles.image} />
        </IndexLink>

      </div>
    )
  }
}

let styles = {
  logo: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '180px',
    // padding: '10px',
    boxSizing: 'border-box',
  }
}

module.exports = Radium(SidebarLogo)
