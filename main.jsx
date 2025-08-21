import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Principal from './pages/Principal.jsx'
import History from './pages/History.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <History/>
  </StrictMode>,
)
