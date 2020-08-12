import { ofType } from 'redux-observable'
import { map, mergeMap } from 'rxjs/operators'

import { ALL_COLLECTIONS } from 'src/app/collection/actions/types'
import { allCollectionsFulfilled } from 'src/app/collection/actions'
import { rootCollections } from 'src/app/collection/repositories/repository'

export const root = action$ => action$
  .pipe(ofType(ALL_COLLECTIONS))
  .pipe(mergeMap(() => rootCollections()))
  .pipe(map(result => allCollectionsFulfilled(result.nodeQuery)))
