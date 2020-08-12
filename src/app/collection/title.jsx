import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export const CollectionTitle = ({ value }) => <ListSubheader component="div">
  <Typography variant={'h6'}>{value.title}</Typography>
</ListSubheader>
