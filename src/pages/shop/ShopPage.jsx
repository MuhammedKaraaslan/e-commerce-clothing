import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'

function ShopPage({ match }) {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={Collection} />
      <Route  />
    </div>
  )
}

export default ShopPage
