import Radium from 'radium'
import React from 'react'

class Widget3x1Full extends React.Component {
  render() {
    return (
      <div className="widget3x1full" style={styles.widget3x1full}>

        <div style={styles.widgetContent}>
          <div style={styles.widgetText}>
            <h3>Widget 3x1 Full</h3>
            <div>bob@email.com secret</div>
          </div>
        </div>

      </div>
    )
  }
}

let styles = {

  widget3x1full: {
    width: '100%',
    float: 'left',
    position: 'relative',
    paddingBottom: '50%',

    '@media (min-width: 754px)': {
      width: '100%',
      paddingBottom: '33.333333%',
    },
  },

  widgetContent: {
    backgroundColor: '#f5a623',
    position: 'absolute',
    top: '0px',
    left: '8px',
    right: '8px',
    bottom: '16px',
    padding: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    zIndex: '1',
  },

  widgetText: {
    backgroundColor: '#fff',
    width: '140px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0',
    padding: '16px',
    boxSizing: 'border-box',

    '@media (min-width: 508px)': {
      width: '50%',
    },

    '@media (min-width: 754px)': {
      width: '33.333333%',
    },

    '@media (min-width: 1300px)': {
      width: '25%',
    },
  },

}

module.exports = Radium(Widget3x1Full)
