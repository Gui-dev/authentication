import React from 'react'

import { Container, Form, Title, InputGroup, PersonIcon, UserIcon, PasswordIcon, Input,
  ButtonSubmit, ButtonIcon, TextButton, ButtonLink
} from './style'

const SignUp: React.FC = () => {
  return (
    <Container>
      <Form>
        <Title>Sign Up</Title>

        <InputGroup>
          <PersonIcon />
          <Input type="text" name="name" placeholder="Digite seu nome"/>
        </InputGroup>
        
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
          <TextButton>Cadastrar</TextButton>
        </ButtonSubmit>
      </Form>
      <ButtonLink to="/" title="Fazer Login">
        Já tenho cadastro. Faça login
      </ButtonLink>
    </Container>
  )
}

export default SignUp