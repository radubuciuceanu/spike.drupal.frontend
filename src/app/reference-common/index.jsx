import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'

import { makeReference } from 'src/app/make-reference'

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      background: theme.palette.hover.main,
      cursor: 'pointer'
    }
  }
}))

export const Reference = ({ value }) => {
  const classes = useStyles()
  const Component = makeReference(value)

  return <Box p={1} className={classes.root}>
    {Component ? <Component value={value}/> : null}
  </Box>
}
