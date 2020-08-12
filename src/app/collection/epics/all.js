import { ofType } from 'redux-observable'
import { map, mergeMap } from 'rxjs/operators'

import { ALL_COLLECTIONS } from 'src/app/collection/actions/types'
import { allCollectionsFulfilled } from 'src/app/collection/actions'
import { fetchCollections } from 'src/app/collection/repositories/repository'

export const all = action$ => action$
  .pipe(ofType(ALL_COLLECTIONS))
  .pipe(mergeMap(() => fetchCollections()))
  .pipe(map(result => allCollectionsFulfilled(result.nodeQuery)))
