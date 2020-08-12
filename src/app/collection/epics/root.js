import { ofType } from 'redux-observable'
import { map, mergeMap } from 'rxjs/operators'

import { fetch } from 'src/app/collection/actions/types'
import { rootCollectionsFulfilled } from 'src/app/collection/actions'
import { rootCollections } from 'src/app/collection/repositories/repository'

export const root = action$ => action$
  .pipe(ofType(fetch.rootCollections))
  .pipe(mergeMap(() => rootCollections()))
  .pipe(map(result => rootCollectionsFulfilled(result.nodeQuery)))
