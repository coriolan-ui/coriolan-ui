import Radium from 'radium'
import React from 'react'
import RetinaImage from 'react-retina-image'
import { Toggle, Badge, RaisedButton, FontIcon, ClearFix, SvgIcon } from 'material-ui'
import { Link } from 'react-router'

class SidebarUserInfo extends React.Component {
  render() {
    return (
      <ClearFix style={this.props.style}>

        <ClearFix style={{ marginBottom: '16px' }}>
          
          <div style={styles.imageContainer} >
            <RetinaImage src={["./img/user/avatar.png", "./img/user/avatar@2x.png"]} alt="User Avatar"/>
          </div>

          <div style={styles.textContainer} >
            <Link to="/profile"><span style={styles.userName} >Джордж Вашингтон</span></Link>

            <Badge
              style={{
                float:'right',
                padding: '12px 20px 12px 12px',
              }}
              badgeStyle={{
                backgroundColor:'#d12f02',
                color:'#fff',
                height: '30px',
                width: '30px',
                fontSize: '16px',
                top: '-6px'
              }}
              // secondary={true}
              badgeContent={3}>

              <SvgIcon style={styles.iconComment}>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </SvgIcon>

            </Badge>
          </div>
          
        </ClearFix>

        <div style={{ marginBottom: '16px' }}>
          <span>Режим</span>
          <span style={{ float: 'right' }}>
            <span style={{ float: 'right', marginLeft: '8px' }}>Руб.</span>
            <span style={{ float: 'right' }}>
              <Toggle
                name="toggleMoneyRegime"
                value="toggleMoneyRegime"
                elementStyle={{ backgroundColor: 'red' }} />
            </span>
            <span style={{ float: 'right', color: '#a7a7a7' }}>Fun</span>
          </span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span>Баланс</span>
          <span style={{ float: 'right' }}>13 500 руб.</span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span>Баллы</span>
          <span style={{ float: 'right' }}>347</span>
        </div>

        <RaisedButton
          primary={true}
          label="Касса"
          labelStyle={{paddingLeft:'8px'}}
          labelPosition="after">

          <SvgIcon style={styles.iconWallet}>
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </SvgIcon>

        </RaisedButton>

      </ClearFix>
    )
  }
}

let styles = {

  imageContainer: {
    float: 'left',
    maxWidth: '40px',
    marginRight: '-100%',
  },

  textContainer: {
    marginLeft: '40px',
  },

  userName: {
    paddingLeft: '10px',
    fontSize: '16px',
    lineHeight: '46px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'left',
    maxWidth: '155px',
    textOverflow: 'ellipsis',
  },

  iconComment: {
    fill: '#F8BA2B',
    verticalAlign: 'middle',
  },

  iconWallet: {
    fill: '#fff',
    padding: '0 0 0 12px',
    marginTop: '-2px',
    verticalAlign: 'middle',
    lineHeight: '36px',
  },

}

module.exports = Radium(SidebarUserInfo)
