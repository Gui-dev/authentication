import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Auth from './auth.routes'
import App from './app.routes'

import { useAuth } from './../contexts/auth'

const Routes: React.FC = () => {

  const { signed } = useAuth()

  return (
    <NavigationContainer>
      
      {
        !signed
          ? <Auth />
          : <App />
      }
      
    </NavigationContainer>
  )
}

export default Routes