/**
 * File Role: Application Entry Point
 * Workflow: Bootstraps the React application and mounts it to the DOM.
 * Description: Standard Vite React entry point. Imports global styles.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
