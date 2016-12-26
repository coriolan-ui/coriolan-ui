import React from 'react'
import DocumentTitle from 'react-document-title'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import HomePage from '../components/HomePage'
import MixinList from '../components/MixinList'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import { config } from 'config'

import './style.scss'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'post') {
            template = <SitePost {...this.props}/>
        } else if (layout === 'page') {
            template = <SitePage {...this.props}/>
        } else if (layout === 'home') {
            template = <HomePage {...this.props}/>
        } else if (layout === 'MixinList') {
            template = <MixinList {...this.props}/>
        }

        return (
            <DocumentTitle title={ `${post.title} • ${config.siteTitle}` }>
                <div className='flex-sticky'>
                    <div className='flex-sticky__content'>
                        <MainMenu {...this.props}/>
                        { template }
                    </div>
                    <div className='flex-sticky__footer'>
                        <Footer {...this.props}/>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
