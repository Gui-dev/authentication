import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './../screens/App/Home'

const App: React.FC = () => {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="Home" component={ Home }/>
    </Stack.Navigator>
  )
}

export default App