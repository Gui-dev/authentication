import React from 'react'

import { Container, Form, Title, InputGroup, UserIcon, PasswordIcon, Input,
  ButtonSubmit, ButtonIcon, TextButton
} from './style'

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
          <PasswordIcon />
          <Input type="password" name="password" placeholder="Digite sua senha"/>
        </InputGroup>

        <ButtonSubmit>
          <ButtonIcon />
          <TextButton>Loggin</TextButton>
        </ButtonSubmit>
      </Form>
    </Container>
  )
}

export default SignIn