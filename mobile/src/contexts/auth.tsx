import React, { createContext, useContext } from 'react'

interface AuthContextProps {
  signed: boolean,
  signIn: () => void,
}

const AuthContext = createContext<AuthContextProps>( {} as AuthContextProps )

export const AuthProvider: React.FC = ( { children } ) => {


  const signIn = () => {

    console.log( 'SignIn' )
  }

  return (
    <AuthContext.Provider value={ { signed: false, signIn } }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext( AuthContext )
  return context
}
