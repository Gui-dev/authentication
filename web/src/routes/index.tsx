import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useAuth } from './../contexts/auth'
import Auth from './auth.routes'
import App from './app.routes'

const Routes: React.FC = () => {

  const { signed } = useAuth()

  const Layout = !signed ? Auth : App
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default Routes