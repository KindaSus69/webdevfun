import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './coreComponents/navbar/navbar.jsx';
import Viewport from './coreComponents/viewport/viewport.jsx';



function App() {
  const [currentPage, setPage] = useState("index");

  return (
    <>
      <Viewport pageId={currentPage} />
      <Navbar currentPage={currentPage} setPage={setPage} />
    </>
  );
}


const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);