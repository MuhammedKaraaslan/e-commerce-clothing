import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../store/shop/shopSelectors'

import CollectionPreview from '../collection-preview/CollectionPreview'

import './CollectionsOverview.styles.scss'

function CollectionsOverview({ collections }) {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
