import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'src/styles/global.css'
import { rootReducer } from 'src/app/root-reducer'

// eslint-disable-next-line react/display-name
export default ({ element }) => {
  const store = createStore(rootReducer)
  return <Provider store={store}>{element}</Provider>
}
