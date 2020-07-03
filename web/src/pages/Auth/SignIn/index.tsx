import React, { useState, ChangeEvent, FormEvent } from 'react'

import { useAuth } from './../../../contexts/auth'
import { Container, Form, Title, InputGroup, UserIcon, PasswordIcon, Input,
  ButtonSubmit, ButtonIcon, TextButton, ButtonLink
} from './style'

const SignIn: React.FC = () => {

  const { signIn, loading } = useAuth()
  const [ formData, setFormData ] = useState( {
    email: '',
    password: '',
  } )

  const handleChangeText = ( event: ChangeEvent<HTMLInputElement> ) => {
    const { name, value }  = event.target
    setFormData( { ...formData, [ name ]: value } )
  }

  const handleSubmit = ( event: FormEvent ) => {
    event.preventDefault()
    signIn( formData.email, formData.password )
  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>
        <Title>Sign In</Title>
        <InputGroup>
          <UserIcon />
          <Input 
            type="text" 
            name="email" 
            placeholder="Digite seu e-mail"
            value={ formData.email }
            onChange={ e => handleChangeText( e ) }
          />
        </InputGroup>
        
        <InputGroup>
          <PasswordIcon />
          <Input 
            type="password" 
            name="password" 
            placeholder="Digite sua senha"
            value={ formData.password }
            onChange={ e => handleChangeText( e ) }
          />

        </InputGroup>

        <ButtonSubmit>
          { loading 
            ? <TextButton>Carregando...</TextButton>
            : (
                <>
                  <ButtonIcon />
                  <TextButton>Entrar</TextButton>
                </>
              )
          }
        </ButtonSubmit>
      </Form>
      <ButtonLink to="/register">
        Ainda não tem cadastro? Cadastre-se
      </ButtonLink>
    </Container>
  )
}

export default SignIn