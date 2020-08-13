import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from 'react-redux'

import { Collection } from 'src/app/collection'
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

  return <Grid container justify={'center'} spacing={4}>
    {
      rootCollections.entities?.map((collection, index) => <Collection key={index} index={index} value={collection}/>)
    }
  </Grid>
}
