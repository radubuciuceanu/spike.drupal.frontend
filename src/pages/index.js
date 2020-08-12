import React, { useEffect, useState } from 'react'
import { tap } from 'rxjs/operators'
import Grid from '@material-ui/core/Grid'

import { fetchCollections } from 'src/app/collection-fetching/repository'
import { Collection } from 'src/app/collection-common'

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

  return <Grid container justify={'center'}>
    {
      rootCollections.map((collection, index) => <Collection key={index} value={collection}/>)
    }
  </Grid>
}
