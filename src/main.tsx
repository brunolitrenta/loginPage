import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)