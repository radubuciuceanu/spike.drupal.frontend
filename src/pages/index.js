import React, { useEffect, useState } from 'react'
import { tap } from 'rxjs/operators'
import Grid from '@material-ui/core/Grid'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import { fetchCollections } from 'src/app/collection-fetching/repository'
import { Collection } from 'src/app/collection-common'
import { makeTheme } from 'src/pages/makeTheme'

const useRootCollections = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    fetchCollections()
      .pipe(tap(response => setCollections(response.nodeQuery.entities)))
      .subscribe()
  }, [])

  return collections
}

export default function Home() {
  const rootCollections = useRootCollections()

  return <ThemeProvider theme={makeTheme()}>
    <Grid container justify={'center'} spacing={4}>
      {
        rootCollections.map((collection, index) => <Collection key={index} value={collection}/>)
      }
    </Grid>
  </ThemeProvider>
}
