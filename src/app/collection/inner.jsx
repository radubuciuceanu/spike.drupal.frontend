import React from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import { Reference } from 'src/app/reference'
import GridList from '@material-ui/core/GridList'

import { CollectionTitle } from 'src/app/collection/title'
import { useSelector } from 'react-redux'

export const InnerCollection = ({ value }) => {
  const innerCollection = useSelector(root => root.collection.inner.toJS())

  return <div hidden={innerCollection.value === null}>
    <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
      <GridListTile cols={3} style={{ height: 'auto' }}>
        <CollectionTitle value={value}/>
      </GridListTile>

      {
        value.queryFieldReferences.entities.map((reference, index) => <Reference key={index} value={reference}/>)
      }
    </GridList>
  </div>
}
