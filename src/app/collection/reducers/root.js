import { fromJS } from 'immutable'
import { ALL_COLLECTIONS_FULFILLED } from 'src/app/collection/actions/types'

const defaultState = fromJS({
  value: {}
})

export const root = (state = defaultState, action) => {
  if (action.type === ALL_COLLECTIONS_FULFILLED) {
    return state.merge({ value: action.payload })
  }

  return state
}
