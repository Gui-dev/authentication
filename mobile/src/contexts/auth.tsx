import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import Loading from './../components/Loading'

import api from './../services/api'
import { signInValidation, signUpValidation } from './../validations/authValidations'

interface AuthContextProps {
  signed: boolean,
  loading: boolean,
  user: object | null,
  signIn: ( email: string, password: string ) => void,
  signUp: () => void,
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
        api.defaults.headers.Authorization = `Bearer ${token}`
      }

      setLoading( false )
    }

    loadData()
  }, [] )

  const signIn = async ( email: string, password: string ) => {

    if( !( await signInValidation.isValid( { email, password } ) ) ) {
      Alert.alert( 'Opppssss', 'Algo deu errado, verifique seus dados' )
    }

    try {
      setLoading( true )
      const response = await api.post<ResponseUserProps>( '/login', { email, password } )
      const { user, token } = response.data
      setUser( user )
      api.defaults.headers.Authorization = `Bearer ${token}`
      await AsyncStorage.setItem( '@User/user', JSON.stringify( user ) )
      await AsyncStorage.setItem( '@User/token', token )   
      setLoading( false )   
    } catch {
      Alert.alert( 'Opssss!!!', 'Algo deu errado, tente mais tarde' )
      setLoading( false )
    }
  }

  const signUp = async () => {

    console.log( 'SignUp' )
  }

  if( loading ) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={ { signed: !!user, loading, user, signIn, signUp } }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext( AuthContext )
  return context
}
