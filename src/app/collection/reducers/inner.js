import { fromJS } from 'immutable'
import { display, hide } from 'src/app/collection/actions/types'

const defaultState = fromJS({
  value: null,
  parentIndex: null
})

export const inner = (state = defaultState, action) => {
  if (action.type === display.innerCollection) {
    return state.merge({ value: action.payload.value, parentIndex: action.payload.parentIndex })
  }

  if (action.type === hide.innerCollection) {
    return state.merge({ value: null, parentIndex: null })
  }

  return state
}
