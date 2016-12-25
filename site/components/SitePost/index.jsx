import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import MixinList from '../MixinList'

import './style.scss'

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='post'>
                <div className='post__sidebar'>
                    <MixinList {...this.props}/>
                </div>
                <div className='post__content'>
                    <h1 className='post__title'>{ post.title }</h1>
                    <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                </div>
            </div>
        );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default SitePost
