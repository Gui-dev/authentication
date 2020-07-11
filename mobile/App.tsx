import React from 'react'
import { StatusBar } from 'react-native'

import { AuthProvider } from './src/contexts/auth'
import Routes from './src/routes'

export default function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" backgroundColor="#414345"/>
      <Routes />
    </AuthProvider>
  )
}