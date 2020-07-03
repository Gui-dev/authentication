import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import api from './../services/api'
import { authValidation } from './../validations/authValidation'


interface AuthProps {
  signed: boolean,
  loading: boolean,
  userData: object | null,
  signIn: ( email: string, password: string ) => void,
}

interface LoginProps {
  user: {
    id: string,
    name: string,
    email: string,
  },
  token: string,
}

const AuthContext = createContext<AuthProps>( {} as AuthProps )

export const AuthProvider: React.FC = ( { children } ) => {

  const [ userData, setUserData ] = useState<object | null>( null )
  const [ loading, setLoading ] = useState<boolean>( false )

  useEffect( () => {
    function loadStorage() {

      setLoading( true )
      const userStorage = localStorage.getItem( '@User:user' )
      const tokenStorage = localStorage.getItem( '@User:token' )

      if( userStorage && tokenStorage ) {
        setUserData( JSON.parse( userStorage ) )
        api.defaults.headers.Authorization = `Bearer ${tokenStorage}`
        setLoading( false )
      }
      setLoading( false )
    }

    loadStorage()
  }, [] )


  const signIn = async ( email: string, password: string ) => {

    if( !( await authValidation.isValid( { email, password } ) ) ) {
      toast.error( 'E-mail ou senha inválidos' )
      return
    }

    try {
      setLoading( true )
      const response = await api.post<LoginProps>( '/login', { email, password } )
      const { user, token } = response.data

      setUserData( user )

      api.defaults.headers.Authorization = `Bearer ${token}`
      localStorage.setItem( '@User:user', JSON.stringify( user ) )
      localStorage.setItem( '@User:token', token )
      setLoading( false )
    } catch (error) {
      console.log( error )
      setLoading( false )
    }
  }

  return (
    <AuthContext.Provider value={ { signed: !!userData, userData, loading, signIn } }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext( AuthContext )
  return context
}

