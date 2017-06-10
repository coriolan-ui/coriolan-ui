import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render() {
    const {body, route} = this.props
    const title = DocumentTitle.rewind()
    const font = <link href='https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|PT+Serif:400italic&subset=latin,cyrillic' rel='stylesheet' type='text/css' />

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!postcss!./public/styles.css')} } />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          <title>{ title }</title>
          { font }
          { css }
          <link rel="shortcut icon" href="https://content.sentimony.com/assets/img/favicons/coriolan-ui/favicon-32.png" />
          <link rel="apple-touch-icon" href="https://content.sentimony.com/assets/img/favicons/coriolan-ui/favicon-144.png" />
          <meta property="og:image" content="https://content.sentimony.com/assets/img/og-images/coriolan-ui/coriolan-ui.png" />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={ {    __html: this.props.body} } />
          <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
        </body>
      </html>
    )
  },
})
