import { fromJS } from 'immutable'
import { display } from 'src/app/collection/actions/types'

const defaultState = fromJS({
  value: null
})

export const inner = (state = defaultState, action) => {
  if (action.type === display.innerCollection) {
    return state.merge({ value: action.payload })
  }

  return state
}
