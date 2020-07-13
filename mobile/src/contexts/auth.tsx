import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import Loading from './../components/Loading'

import api from './../services/api'

interface AuthContextProps {
  signed: boolean,
  loading: boolean,
  user: object | null,
  signIn: ( email: string, password: string ) => void,
}

interface ResponseUserProps {
  user: {
    id: string,
    name: string,
    email: string,
  },
  token: string,
}

const AuthContext = createContext<AuthContextProps>( {} as AuthContextProps )

export const AuthProvider: React.FC = ( { children } ) => {

  const [ user, setUser ] = useState<object | null>( null )
  const [ loading, setLoading ] = useState<boolean>( true )

  useEffect( () => {
    async function loadData() {
      const user = await AsyncStorage.getItem( '@User/user' )
      const token = await AsyncStorage.getItem( '@User/token' )

      if( user && token ) {
        setUser( JSON.parse( user ) )
        setLoading( false )
      }

      setLoading( false )
    }

    loadData()
  }, [] )

  const signIn = async ( email: string, password: string ) => {

    try {
      const response = await api.post<ResponseUserProps>( '/login', { email, password } )
      const { user, token } = response.data
      setUser( user )
      await AsyncStorage.setItem( '@User/user', JSON.stringify( user ) )
      await AsyncStorage.setItem( '@User/token', token )      
    } catch {
      Alert.alert( 'Opssss!!!', 'Algo deu errado, tente mais tarde' )
    }
  }

  if( loading ) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={ { signed: !!user, loading, user, signIn } }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext( AuthContext )
  return context
}
