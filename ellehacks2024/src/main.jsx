import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { configDotenv } from 'dotenv'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* configDotenv(); */}
    <App />
  </React.StrictMode>,
)
