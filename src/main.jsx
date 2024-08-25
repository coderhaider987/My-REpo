import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import Manager from './components/Manager.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    {/* <App /> */}
    <Manager/>
    <Footer/>
  </StrictMode>,
)