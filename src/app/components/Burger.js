import Radium from 'radium'
import React from 'react'
import { RaisedButton, LeftNav, MenuItem, SvgIcon } from 'material-ui'

import Sidebar from './Sidebar';

class Burger extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 'navOpened' :  false };
  }

  render() {
    const navTransfrom = this.state.navOpened ? 0 : -300;
    return (
      <div style={styles.burger}>

        <RaisedButton
          primary={true}
          label="Меню"
          labelPosition="after"
          labelStyle={{paddingLeft:'8px'}}
          onTouchTap={this._toggleLeftNav.bind(this)}>

          <SvgIcon style={styles.iconMenu}>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </SvgIcon>

        </RaisedButton>

        <LeftNav ref="leftNav"
          onNavOpen={()=>this.setState({ navOpened : true })}
          onNavClose={()=>this.setState({ navOpened : false })}
          style={{ 
            width: '300px',
            transform: 'translate3d(' + navTransfrom + 'px, 0, 0)',
          }}
          docked={false} >

          <Sidebar style={{display: 'block '}}/>

        </LeftNav>

      </div>
    )
  }

  _toggleLeftNav() {
    this.refs.leftNav.toggle();
  }
}

let styles = {
  burger: {
    marginBottom: '16px',
    display: 'block',

    '@media (min-width: 1054px)': {
      display: 'none',
    },
  },
  iconMenu: {
    fill: '#fff',
    padding: '0 0 0 12px',
    marginTop: '-2px',
    verticalAlign: 'middle',
    lineHeight: '36px',
  }
}

module.exports = Radium(Burger)
