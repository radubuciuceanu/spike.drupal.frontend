import { fromJS } from 'immutable'
import { display, hide } from 'src/app/collection/actions/types'

const defaultState = fromJS({
  value: null,
  parentTitle: null
})

export const inner = (state = defaultState, action) => {
  if (action.type === display.innerCollection) {
    return state.merge({ value: action.payload.value, parentTitle: action.payload.parentTitle })
  }

  if (action.type === hide.innerCollection) {
    return state.merge({ value: null, parentTitle: null })
  }

  return state
}
