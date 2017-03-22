import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import MixinList from '../MixinList'
import SiteList from '../SiteList'

import './style.scss'

class Post extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let category, title, list, iframe, sourceUrl, siteUrl

        category = post.category
        title = post.title

        if (category === 'mixin') {
            list = <MixinList {...this.props}/>
        } else if (category === 'site') {
            list = <SiteList {...this.props}/>
        } else if (title === 'Mixins') {
            list = <MixinList {...this.props}/>
        } else if (title === 'Sites') {
            list = <SiteList {...this.props}/>
        }

        if (category === 'site') {
            iframe =
            <div className='post__ratio'>
                <iframe className='post__iframe' src={ post.siteUrl } />
            </div>
        }

        if (category === 'site') {
            sourceUrl =
            <p>
                source: <a href={ post.sourceUrl } target='_blank'>{ post.sourceUrl }</a>
            </p>
        }

        if (category === 'site') {
            siteUrl =
            <p>
                link: <a href={ post.siteUrl } target='_blank'>{ post.siteUrl }</a>
            </p>
        }

        return (
            <div className='post'>
                <div className='post__sidebar'>
                    { list }
                </div>
                <div className='post__content'>
                    <h1 className='post__title'>{ post.title }</h1>
                    { iframe }
                    { siteUrl }
                    { sourceUrl }
                    <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default Post
