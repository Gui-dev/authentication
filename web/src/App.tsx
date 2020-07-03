import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/auth'
import GlobalStyle from './styles/GlobalStyle'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
          <ToastContainer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
