import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import { makeTheme } from './make-theme'

import 'src/styles/global.css'
import { rootReducer } from 'src/app/root-reducer'
import { rootEpic } from 'src/app/root-epic'

export const wrapRootElement = ({ element }) => {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

  epicMiddleware.run(rootEpic)

  return <Provider store={store}>
    <ThemeProvider theme={makeTheme()}>
      {element}
    </ThemeProvider>
  </Provider>
}
