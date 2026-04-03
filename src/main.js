import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

console.log("main.js script triggered");
document.getElementById('root').innerHTML = "<h1>Initializing Portfolio...</h1>";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
