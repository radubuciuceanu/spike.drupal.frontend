import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import { useSelector } from 'react-redux'

import { Collection } from 'src/app/collection/index'

export const InnerCollection = ({ parent }) => {
  const innerCollection = useSelector(root => root.collection.inner.toJS())
  const isVisible = innerCollection.parentTitle === parent.title && innerCollection.value.entityBundle === 'collection'

  if (innerCollection?.value?.entityBundle !== 'collection') {
    return null
  }

  return <Collapse in={isVisible}>
    <Collection value={innerCollection.value}/>
  </Collapse>
}
