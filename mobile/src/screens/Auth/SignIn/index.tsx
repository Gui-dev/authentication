import React from 'react'

import Background from './../../../components/Background'
import { Container, Title, Form, FormInput } from './style'

const SignIn: React.FC = () => {
  return (
    <Background>
      <Container>
        <Title>Sign in</Title>

        <Form>
          
          <FormInput 
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={ false }
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          
          <FormInput 
            icon="lock-open"
            secureTextEntry={ true }
            autoCorrect={ false }
            autoCapitalize="none"
            placeholder="Digite sua senha"
          />

        </Form>
      </Container>
    </Background>
  )
}

export default SignIn