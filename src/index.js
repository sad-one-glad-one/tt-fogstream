import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.scss'

import { ThemeContextProvider } from './theme/ThemeContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeContextProvider>
              <App />
          </ThemeContextProvider>
      </BrowserRouter>
  </React.StrictMode>
)
