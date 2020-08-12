import { combineReducers } from 'redux'

import { fetch } from 'src/app/collection/reducers/fetch'

export const collection = combineReducers({ fetch })
