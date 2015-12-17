import Radium from 'radium'
import React from 'react'

class WrapPresets extends React.Component {
  render() {
    return (
        <div style={styles.presets}>

          <div style={styles.container}>
            <h3>Presets</h3>
          </div>

        </div>
    )
  }
}

let styles = {
  presets: {
    width: '100%',
    height: '134px',
    float: 'left',
    position: 'relative',
  },
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: '0px',
    left: '8px',
    right: '8px',
    bottom: '16px',
    padding: '16px',
    borderRadius: '4px',
    overflow: 'hidden',
  }
}

module.exports = Radium(WrapPresets)
