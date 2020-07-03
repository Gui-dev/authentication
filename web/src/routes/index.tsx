import React from 'react'

import { useAuth } from './../contexts/auth'
import Auth from './auth.routes'
import App from './app.routes'

const Routes: React.FC = () => {

  const { signed } = useAuth()

  const Layout = !signed ? Auth : App
  return (
    <Layout />
  )
}

export default Routes