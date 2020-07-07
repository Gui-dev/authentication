import React, { useEffect, useState } from 'react'

import api from './../../../services/api'
import { useAuth } from './../../../contexts/auth'
import { Container } from './style'

interface UserProps {
  id: string,
  name: string,
  email: string,
}

const Home: React.FC = () => {

  const { signOut } = useAuth()
  const [ user, setUser ] = useState<UserProps>( {} as UserProps )

  useEffect( () => {
    async function loadUser() {
      const { data } = await api.get<UserProps>( '/users' )
      setUser( data )
    }

    loadUser()
  }, [] )

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <h1>Welcome, <span>{ user.name }</span></h1>

      <button onClick={ handleSignOut }>Sair do App</button>
    </Container>
  )
}

export default Home