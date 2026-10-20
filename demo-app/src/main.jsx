import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from './App.jsx'

console.log("hello world!")

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Greeting></Greeting>
  </StrictMode>,
)
