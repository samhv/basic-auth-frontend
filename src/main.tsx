import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind-output.css'
import { RouteProvider } from './components/RouteProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>,
)
