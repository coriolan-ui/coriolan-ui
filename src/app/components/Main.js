import React from 'react'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import VaBankRawTheme from '../styles/raw-themes/vabank-raw-theme'

import Sidebar from './Sidebar';
import Wrapper from './Wrapper';

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(VaBankRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  render() {
    return (
      <div>
        <Sidebar />
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </div>
    );
  },
});

module.exports = Main
