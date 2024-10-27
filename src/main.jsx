import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import CollectionSection from './components/ColectionSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About/>
    <CollectionSection/>
  </StrictMode>,
)
