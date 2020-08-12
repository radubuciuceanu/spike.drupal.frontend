import { fetch } from 'src/app/collection/actions/types'

export const rootCollections = () => ({
  type: fetch.rootCollections
})

export const rootCollectionsFulfilled = payload => ({
  type: fetch.fulfilled.rootCollections,
  payload
})
