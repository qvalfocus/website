import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {HashRouter as Router } from "react-router-dom";
import './index.css'
import App from './App.jsx'

// ... rest of your index.js content
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/website">
      <App />
    </BrowserRouter>
  </StrictMode>,
)