import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JsxCrashCourse from './Chapitres/JsxCrashCourse.jsx'
import HomePage from './Chapitres/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JsxCrashCourse /> */}
    <HomePage />
  </StrictMode>,
)
