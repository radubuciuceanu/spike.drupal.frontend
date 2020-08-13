import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { useDispatch } from 'react-redux'

import { InnerCollection } from 'src/app/collection/inner'
import { CollectionTitle } from 'src/app/collection/title'
import { Item } from 'src/app/item'
import { displayInnerCollection } from 'src/app/collection/actions'

const useOnClickCallback = () => {
  const dispatch = useDispatch()

  return (innerItem, index) => dispatch(displayInnerCollection({ value: innerItem, parentIndex: index }))
}

export const Collection = ({ index, value }) => {
  const onClick = useOnClickCallback()

  return <Grid item xs={10} sm={10} md={10} lg={10}>
    <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
      <GridListTile cols={3} style={{ height: 'auto' }}>
        <CollectionTitle value={value}/>
      </GridListTile>

      {
        value.queryFieldReferences.entities
          .map((item, itemIndex) => <Item key={itemIndex} value={item} onClick={_ => onClick(item, index)}/>)
      }
    </GridList>

    <Grid item container justify={'center'}>
      <Grid item xs={11} sm={11} md={11} lg={11}>
        <InnerCollection index={index}/>
      </Grid>
    </Grid>
  </Grid>
}
