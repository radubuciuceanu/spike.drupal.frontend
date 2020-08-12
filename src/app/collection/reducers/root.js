import { fromJS } from 'immutable'
import { fetch } from 'src/app/collection/actions/types'

const defaultState = fromJS({
  value: {}
})

export const root = (state = defaultState, action) => {
  if (action.type === fetch.fulfilled.rootCollections) {
    return state.merge({ value: action.payload })
  }

  return state
}
