import React from 'react'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

const useItemStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      background: theme.palette.hover.main,
      cursor: 'pointer'
    }
  }
}))

export const Item = ({ value, onClick }) => {
  const classes = useItemStyles()

  return <Box p={1} className={classes.root}>
    <GridListTile>

      <img src={'https://material-ui.com/static/images/grid-list/camera.jpg'} alt={'Image...'} width={303}
           onClick={onClick}/>

      <GridListTileBar title={value.title} subtitle={value.fieldShortDescription}/>
    </GridListTile>
  </Box>
}
