import { combineReducers } from 'redux'

import { all } from 'src/app/collection/reducers/all'

export const collection = combineReducers({ all })
