import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import configureStore from './configureStore'
import Subjects from './containers/Subjects'

const store = configureStore()

export default () => (
  <StoreProvider store={store}>
    <div>
      <h3>Subjects</h3>
      <Subjects />
    </div>
  </StoreProvider>
)
