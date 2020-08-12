import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import 'src/styles/global.css'
import { rootReducer } from 'src/app/root-reducer'
import { rootEpic } from 'src/app/root-epic'

// eslint-disable-next-line react/display-name
export default ({ element }) => {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

  epicMiddleware.run(rootEpic)

  return <Provider store={store}>{element}</Provider>
}
