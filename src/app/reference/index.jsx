import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'

import { Item } from 'src/app/item'

const useReferenceStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      background: theme.palette.hover.main,
      cursor: 'pointer'
    }
  }
}))

export const Reference = ({ value }) => {
  const classes = useReferenceStyles()

  return <Box p={1} className={classes.root}>
    <Item value={value}/>
  </Box>
}
