import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import 'normalize.css'
import './main.css'

import App from './App.tsx'
import store from './store/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
    <App />
    </Provider>
  </>,
)
