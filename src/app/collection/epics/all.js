import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'

import { ALL_COLLECTIONS } from 'src/app/collection/actions/types'
import { allCollectionsFulfilled } from 'src/app/collection/actions'

export const all = action$ => action$
  .pipe(ofType(ALL_COLLECTIONS))
  .pipe(map(() => allCollectionsFulfilled()))
