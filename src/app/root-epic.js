import { combineEpics } from 'redux-observable'

import { collection } from 'src/app/collection/epics'

export const rootEpic = combineEpics(collection)
