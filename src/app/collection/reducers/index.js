import { combineReducers } from 'redux'

import { root } from 'src/app/collection/reducers/root'
import { inner } from 'src/app/collection/reducers/inner'

export const collection = combineReducers({ root, inner })
