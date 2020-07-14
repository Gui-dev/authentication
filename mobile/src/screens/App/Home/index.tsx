import React, { useEffect, useState } from 'react'

import api from './../../../services/api'
import { useAuth } from './../../../contexts/auth'

import { Container, Title, Person, ButtonLink, ButtonLinkText } from './style'

interface UserResponse {
  id: string,
  name: string,
  email: string,
}

const Home: React.FC = () => {
  
  const { signOut } = useAuth()
  const [ user, setUser ] = useState<UserResponse | null>( null ) 

  useEffect( () => {
    async function loadUser() {
      const { data } = await api.get<UserResponse>( '/users' )
      setUser( data )
    }

    loadUser()
  }, [] )

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <Title>
        Welcome, <Person>{ user?.name }</Person>
      </Title>
      <ButtonLink onPress={ handleSignOut }>
        <ButtonLinkText>
          Sair do app
        </ButtonLinkText>
      </ButtonLink>
    </Container>
  )
}

export default Home