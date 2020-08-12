import { combineEpics } from 'redux-observable'

import { root } from 'src/app/collection/epics/root'

export const collection = combineEpics(root)
