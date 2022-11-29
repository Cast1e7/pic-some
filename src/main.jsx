import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { PhotosContextProvider } from './PhotosContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotosContextProvider>
      <Router basename={'/pic-some'}>
        <App />
      </Router>
    </PhotosContextProvider>
  </React.StrictMode>
)
