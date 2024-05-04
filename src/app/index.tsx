import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterDomProvider } from '@/entities/router'
import { StoreProvider } from '@/entities/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterDomProvider />
    </StoreProvider>
  </React.StrictMode>,
)
