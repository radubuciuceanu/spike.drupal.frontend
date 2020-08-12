import { fromJS } from 'immutable'
import { display, hide } from 'src/app/collection/actions/types'

const defaultState = fromJS({
  value: null,
  title: null
})

export const inner = (state = defaultState, action) => {
  if (action.type === display.innerCollection) {
    return state.merge({ value: action.payload.value, title: action.payload.title })
  }

  if (action.type === hide.innerCollection) {
    return state.merge({ value: null, title: null })
  }

  return state
}
