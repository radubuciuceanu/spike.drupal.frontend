import React, { Fragment, useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'

import { makeReference } from 'src/app/make-reference'
import { Movie } from 'src/app/movie-common'
import { Collection } from 'src/app/collection-common'

const useReferenceStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      background: theme.palette.hover.main,
      cursor: 'pointer'
    }
  }
}))

const ChildCollection = ({ value }) => {
  const [is, setIs] = useState(true)

  return <Fragment>
    <Movie value={value} onClick={() => setIs(!is)}/>
    <Collapse in={!is}>
      <Grid item container>
        <Collection value={value}/>
      </Grid>
    </Collapse>
  </Fragment>
}

export const Reference = ({ value }) => {
  const classes = useReferenceStyles()
  const Component = makeReference(value)

  return <Box p={1} className={classes.root}>
    {Component ? <Component value={value}/> : null}
    {value.entityBundle === 'collection' ? <ChildCollection value={value}/> : null}
  </Box>
}
