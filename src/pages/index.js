import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { useDispatch, useSelector } from 'react-redux'

import { Collection } from 'src/app/collection'
import { makeTheme } from 'src/pages/makeTheme'
import { rootCollections } from 'src/app/collection/actions'

const useStartupActions = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(rootCollections())
  }, [])
}

export default function Home() {
  useStartupActions()
  const rootCollections = useSelector(root => root.collection.root.toJS().value)

  return <ThemeProvider theme={makeTheme()}>
    <Grid container justify={'center'} spacing={4}>
      {
        rootCollections.entities?.map((collection, index) => <Collection key={index} value={collection}/>)
      }
    </Grid>
  </ThemeProvider>
}
