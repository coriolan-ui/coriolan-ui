import Radium from 'radium'
import React from 'react'

import Burger from './Burger';

class Wrapper extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>

        <Burger />

        {this.props.children}

      </div>
    )
  }
}

let styles = {
  wrapper: {
    display: 'block',
    padding: '16px',
    marginLeft: '0px',

    '@media (min-width: 1054px)': {
      marginLeft: '300px',
    },
  },
}

module.exports = Radium(Wrapper)
