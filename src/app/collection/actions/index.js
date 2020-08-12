import { ALL_COLLECTIONS, ALL_COLLECTIONS_FULFILLED } from 'src/app/collection/actions/types'

export const allCollections = () => ({
  type: ALL_COLLECTIONS
})

export const allCollectionsFulfilled = payload => ({
  type: ALL_COLLECTIONS_FULFILLED,
  payload
})
