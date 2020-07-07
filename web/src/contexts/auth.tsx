import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import api from './../services/api'
import { authValidation } from './../validations/authValidation'
import { signUpValidation } from './../validations/signUpValidation'


interface AuthProps {
  signed: boolean,
  loading: boolean,
  userData: object | null,
  signIn: ( email: string, password: string ) => void,
  signUp: ( name: string, email: string, password: string, confirmPassword: string ) => void,
  signOut: () => void,
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

  const signUp = async ( name: string, email: string, password: string, confirmPassword: string ) => {
    
    try {

      if( !( await signUpValidation.isValid( { name, email, password, confirmPassword } ) ) ) {
        toast.error( 'Preencha seus dados corretamente!!!' )
        return
      }      
      await api.post( '/users', { name, email, password } )
      toast.success( 'Cadastro efetuado com sucesso. Faça Login!' )
    } catch (error) {
      toast.error( 'Erro ao fazer o cadastro, tente mais tarde' )
    }

  }

  const signOut = () => {
    localStorage.clear()
    setUserData( null )
  }

  return (
    <AuthContext.Provider 
      value={ { signed: !!userData, userData, loading, signIn, signUp, signOut } }
    >
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext( AuthContext )
  return context
}

