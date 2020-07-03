import React from 'react'

import { AuthProvider } from './contexts/auth'
import GlobalStyle from './styles/GlobalStyle'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
        <ToastContainer/>
      </AuthProvider>
    </>
  )
}

export default App
