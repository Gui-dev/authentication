import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from './../../../contexts/auth'
import { Container, Form, Title, InputGroup, PersonIcon, UserIcon, PasswordIcon, Input,
  ButtonSubmit, ButtonIcon, TextButton, ButtonLink
} from './style'

const SignUp: React.FC = () => {

  const history = useHistory()
  const { signUp } = useAuth() 
  const [ data, setData ] = useState( {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  } )

  const handleInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target
    setData( { ...data, [ name ]: value } )
  }

  const handleSubmit = ( event: FormEvent ) => {
    event.preventDefault()
    signUp( data.name, data.email, data.password, data.confirmPassword )
    history.push( '/' )
  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>
        <Title>Sign Up</Title>

        <InputGroup>
          <PersonIcon />
          <Input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome"
            value={ data.name }
            onChange={ handleInputChange }
          />
        </InputGroup>
        
        <InputGroup>
          <UserIcon />
          <Input 
            type="text" 
            name="email" 
            placeholder="Digite seu e-mail"
            value={ data.email }
            onChange={ handleInputChange }
          />
        </InputGroup>
        
        <InputGroup>
          <PasswordIcon />
          <Input 
            type="password" 
            name="password" 
            placeholder="Digite sua senha"
            value={ data.password }
            onChange={ handleInputChange }
          />
        </InputGroup>
        
        <InputGroup>
          <PasswordIcon />
          <Input 
            type="password" 
            name="confirmPassword" 
            placeholder="Comfirmar sua senha"
            value={ data.confirmPassword }
            onChange={ handleInputChange }
          />
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