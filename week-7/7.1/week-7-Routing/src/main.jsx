import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouting from './App-Routing.jsx'
import './index.css'
import AppLazyLoading from './App-lazyLoading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppRouting /> */}
    <AppLazyLoading/>
  </React.StrictMode>,
)
