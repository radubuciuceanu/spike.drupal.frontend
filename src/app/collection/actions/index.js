import { fetch, display } from 'src/app/collection/actions/types'

export const rootCollections = () => ({
  type: fetch.rootCollections
})

export const rootCollectionsFulfilled = payload => ({
  type: fetch.fulfilled.rootCollections,
  payload
})

export const displayInnerCollection = payload => ({
  type: display.innerCollection,
  payload
})
