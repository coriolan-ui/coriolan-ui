import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import Ink from 'react-ink'

import './style.scss'

class MixinList extends React.Component {
    render() {
        const pageLinks = []

        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.id'))
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.category') === 'mixin') {
                const id = access(page, 'data.id') || page.path
                const title = access(page, 'data.title') || page.path

                pageLinks.push(
                    <li key={ id }>
                        <Link to={ prefixLink(page.path) } className='mixin-list__link' activeClassName='is-selected' >
                            { title }
                            <Ink />
                        </Link>
                    </li>
                )
            }
        })

        return (
            <ul className='mixin-list'>
                { pageLinks }
            </ul>
        );
    }
}

MixinList.propTypes = {
    route: React.PropTypes.object,
}

export default MixinList
