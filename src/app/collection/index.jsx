import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { useDispatch } from 'react-redux'

import { InnerCollection } from 'src/app/collection/inner'
import { CollectionTitle } from 'src/app/collection/title'
import { Item } from 'src/app/item'
import { displayInnerCollection } from 'src/app/collection/actions'

const useOnClickCallback = value => {
  const dispatch = useDispatch()

  return innerItem => dispatch(displayInnerCollection({ value: innerItem, title: value.title }))
}

export const Collection = ({ value }) => {
  const onClick = useOnClickCallback(value)

  return <Grid item xs={10} sm={10} md={10} lg={10}>
    <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
      <GridListTile cols={3} style={{ height: 'auto' }}>
        <CollectionTitle value={value}/>
      </GridListTile>

      {
        value.queryFieldReferences.entities
          .map((item, index) => <Item key={index} value={item} onClick={_ => onClick(item)}/>)
      }
    </GridList>

    <InnerCollection value={value}/>
  </Grid>
}
