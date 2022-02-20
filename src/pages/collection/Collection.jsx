import React from 'react'

import './Collection.styles.scss'

import { selectCollection } from '../../store/shop/shopSelectors'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'

function Collection({ collection }) {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)