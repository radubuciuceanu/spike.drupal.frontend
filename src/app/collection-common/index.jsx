import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'

import { Reference } from 'src/app/reference-common'

const CollectionTitle = ({ value }) => <GridListTile cols={3} style={{ height: 'auto' }}>
  <ListSubheader component="div">
    <Typography variant={'h6'}>{value.title}</Typography>
  </ListSubheader>
</GridListTile>

export const Collection = ({ value }) => <Grid item xs={10} sm={10} md={10} lg={10}>
  <GridList cellHeight={20} style={{ overflow: 'hidden' }}>
    <CollectionTitle value={value}/>

    {
      value.queryFieldReferences.entities.map((reference, index) => <Reference key={index} value={reference}/>)
    }
  </GridList>
</Grid>
