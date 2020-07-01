import React from 'react'

import { Container, Form, Title, InputGroup, UserIcon, Input } from './style'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Form>
        <Title>Sign In</Title>
        <InputGroup>
          
          <UserIcon />
          <Input type="text" name="email" placeholder="Digite seu e-mail"/>
        </InputGroup>
        
        <InputGroup>
          
          <UserIcon />
          <Input type="password" name="password" placeholder="Digite sua senha"/>
        </InputGroup>

      </Form>
    </Container>
  )
}

export default SignIn