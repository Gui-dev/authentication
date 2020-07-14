import { createRef } from 'react'
import { NavigationContainerProps } from '@react-navigation/native'

export const navigationRef = createRef<NavigationContainerProps & any>()

export const navigate = ( name: string, params?: object ) => {
  navigationRef.current?.navigate( name, params )
}