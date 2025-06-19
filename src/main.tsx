import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <html className='bg-neutral-900 text-neutral-100'>
      <head>
        <title>My Portfolio</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  </StrictMode>,
)
