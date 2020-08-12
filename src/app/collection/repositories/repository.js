import { from } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import rootCollectionsQuery from 'src/app/collection/repositories/root-collections.graphql'

const URL = 'http://localhost:8080/graphql'

const headers = () => ({
  // eslint-disable-next-line no-undef
  Authorization: 'Basic ' + btoa('admin:admin')
})

const client = () => new ApolloClient({
  headers: headers(),
  uri: URL,
  cache: new InMemoryCache()
})

export const rootCollections = () => from(client().query({ query: rootCollectionsQuery }))
  .pipe(map(response => response.data))
