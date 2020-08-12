import React from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import GridList from '@material-ui/core/GridList'

import { CollectionTitle } from 'src/app/collection/title'
import { useSelector } from 'react-redux'
import { Item } from 'src/app/item'

export const InnerCollection = ({ value }) => {
  const innerCollection = useSelector(root => root.collection.inner.toJS())

  return <div hidden={innerCollection.title !== value.title}>
    <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
      <GridListTile cols={3} style={{ height: 'auto' }}>
        <CollectionTitle value={innerCollection?.value ?? {}}/>
      </GridListTile>

      {
        innerCollection?.entities?.map((reference, index) => <Item key={index} value={reference}/>)
      }
    </GridList>
  </div>
}