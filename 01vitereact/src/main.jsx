import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Name(params) {
  return (
    <div>
      <h1>My name is shivam goel</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Name />
  </StrictMode>
)
