import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'
import { config } from 'config'

import './style.scss'

class Footer extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='footer'>
                <div className='footer__copyright'>2015 - 2016 © { config.siteTitle }</div>
                <div className='footer__powered'>
                    Powered by <a href={ config.poweredUrl } className='footer__powered-link' target='_blank'>{ config.poweredTitle }</a>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default Footer
