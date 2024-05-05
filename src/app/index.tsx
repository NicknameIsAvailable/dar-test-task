import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterDomProvider } from '@/entities/router'
import { StoreProvider } from '@/entities/store'
import "./globals.css"
import { Toaster } from '@/shared/ui/sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterDomProvider />
      <Toaster />
    </StoreProvider>
  </React.StrictMode>,
)
