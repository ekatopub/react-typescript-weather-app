import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppReact19 from './AppReact19.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppReact19 />
  </StrictMode>,
)
