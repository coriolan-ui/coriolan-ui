import Radium from 'radium'
import React from 'react'
import { ClearFix } from 'material-ui'

import PopupReg from './PopupReg';
import PopupLog from './PopupLog';

class SidebarUserAutorize extends React.Component {
  render() {
    return (
      <ClearFix style={this.props.style}>

        <PopupReg />
        <PopupLog />

      </ClearFix>
    )
  }
}

let styles = {
}

module.exports = Radium(SidebarUserAutorize)
