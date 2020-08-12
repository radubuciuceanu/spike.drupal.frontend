import { combineEpics } from 'redux-observable'

import { all } from 'src/app/collection/epics/all'

export const collection = combineEpics(all)
