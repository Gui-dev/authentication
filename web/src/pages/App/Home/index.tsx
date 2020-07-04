import React from 'react'

import { useAuth } from './../../../contexts/auth'
import { Container } from './style'

const Home: React.FC = () => {

  const { signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <h1>Welcome</h1>

      <button onClick={ handleSignOut }>Sair do App</button>
    </Container>
  )
}

export default Home