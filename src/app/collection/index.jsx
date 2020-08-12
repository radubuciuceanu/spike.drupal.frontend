import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { Reference } from 'src/app/reference'
import { InnerCollection } from 'src/app/collection/inner'
import { CollectionTitle } from 'src/app/collection/title'

export const Collection = ({ value }) => <Grid item xs={10} sm={10} md={10} lg={10}>
  <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
    <GridListTile cols={3} style={{ height: 'auto' }}>
      <CollectionTitle value={value}/>
    </GridListTile>

    {
      value.queryFieldReferences.entities.map((reference, index) => <Reference key={index} value={reference}/>)
    }
  </GridList>

  <InnerCollection value={value}/>
</Grid>
