import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import { useDispatch, useSelector } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Grid from '@material-ui/core/Grid'

import { CollectionTitle } from 'src/app/collection/title'
import { Item } from 'src/app/item'
import { displayInnerCollection } from 'src/app/collection/actions'

const useOnClickCallback = () => {
  const dispatch = useDispatch()

  return (innerItem, index) => dispatch(displayInnerCollection({ value: innerItem, parentIndex: index }))
}

export const InnerCollection = ({ index }) => {
  const innerCollection = useSelector(root => root.collection.inner.toJS())
  const isVisible = innerCollection.parentIndex === index
  const onClick = useOnClickCallback()

  if (innerCollection?.value == null || innerCollection?.value?.entityBundle !== 'collection') {
    return null
  }

  return <Collapse in={isVisible}>
    <Grid item xs={10} sm={10} md={10} lg={10}>
      <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
        <GridListTile cols={3} style={{ height: 'auto' }}>
          <CollectionTitle value={innerCollection.value}/>
        </GridListTile>

        {
          innerCollection.value.queryFieldReferences.entities
            .map((item, itemIndex) => <Item key={itemIndex} value={item} onClick={() => onClick(item, index)}/>)
        }
      </GridList>
    </Grid>
  </Collapse>
}
