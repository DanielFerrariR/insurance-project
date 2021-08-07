import React from 'react'
import {
  render as rtlRender,
  RenderOptions,
  RenderResult
} from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { rootReducer, RootState } from 'src/store'
import { createMemoryHistory } from 'history'

interface Options {
  initialState?: RootState
  route?: string
  rtlOptions?: RenderOptions
}

const render = (ui: React.ReactElement, options?: Options): RenderResult => {
  let store = createStore(rootReducer)
  const route = '/'
  let history = createMemoryHistory({
    initialEntries: [route]
  })
  let rest = {}

  if (options) {
    const {
      initialState: initialStateOptions,
      route: routeOptions,
      ...rtlOptions
    } = options

    if (initialStateOptions) {
      store = createStore(rootReducer, initialStateOptions)
    }
    if (routeOptions) {
      history = createMemoryHistory({
        initialEntries: [routeOptions]
      })
    }

    rest = rtlOptions
  }

  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return rtlRender(ui, { wrapper: Wrapper, ...rest })
}

export * from '@testing-library/react'

export { render }
