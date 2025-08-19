import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import JsxCrashCourse from './Chapitres/JsxCrashCourse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JsxCrashCourse /> */}
    <App />
  </StrictMode>,
)
