import React, { createContext, useContext, useEffect, useState } from 'react'

import api from './../services/api'
const AuthContext = createContext( {} )

interface AuthProps {
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

export const AuthProvider: React.FC = ( { children } ) => {

  const [ userData, setUserData ] = useState<any>( null )
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
    }
  }

  return (
    <AuthContext.Provider value={ { signed: !!userData, userData, loading, signIn } }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext( AuthContext ) as AuthProps
  return context
}

