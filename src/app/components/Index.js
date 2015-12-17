import React from 'react'
import { render } from 'react-dom'
import Radium from 'radium'
import { ClearFix } from 'material-ui'

import WrapPresets from './WrapPresets';
import Widget1x1 from './Widget1x1';
import Widget2x1 from './Widget2x1';
import Widget3x1 from './Widget3x1';
import Widget3x1Full from './Widget3x1Full';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Главная</h1>

        <ClearFix style={styles.widgetContainer}>
          <Widget3x1Full />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <WrapPresets />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />

          <Widget2x1 />
          <Widget2x1 />

          <Widget1x1 />
          <Widget3x1 />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <WrapPresets />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <Widget3x1Full />
        </ClearFix>
      </div>
    )
  }
}

let styles = {
  widgetContainer: {
    margin: '0 -8px',
  },
}

module.exports = Radium(Index)
