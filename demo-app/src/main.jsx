import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './coreComponents/navbar/navbar.jsx';
import Viewport from './coreComponents/viewport/viewport.jsx';

let currentPage = "index";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Viewport>
    </Viewport>
    <Navbar></Navbar>
  </StrictMode>
)
