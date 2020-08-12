import React from 'react'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import GridListTile from '@material-ui/core/GridListTile'

export const Item = ({ value, onClick }) => <GridListTile>
  <img src={'https://material-ui.com/static/images/grid-list/camera.jpg'} alt={'Image...'} width={303} onClick={onClick}/>
  <GridListTileBar title={value.title} subtitle={value.fieldShortDescription}/>
</GridListTile>
