import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from './../../../contexts/auth'

import Background from './../../../components/Background'
import { Container, Title, Form, FormInput, ButtonSubmit, TextButton, 
  ButtonLink, TextButtonLink } from './style'

const SignIn: React.FC = () => {

  const navigation = useNavigation()
  const { signIn } = useAuth()

  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const handleNavigationSignUp = () => {
    navigation.navigate( 'SignUp' )
  }

  const handleSubmit = () => {

    signIn( email, password )
  }

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
            value={ email }
            onChangeText={ setEmail }
          />
          
          <FormInput 
            icon="lock-open"
            secureTextEntry={ true }
            autoCorrect={ false }
            autoCapitalize="none"
            placeholder="Digite sua senha"
            value={ password }
            onChangeText={ setPassword }
          />

          <ButtonSubmit onPress={ handleSubmit }>
            <TextButton>
              Enter
            </TextButton>
          </ButtonSubmit>

        </Form>

        <ButtonLink onPress={ handleNavigationSignUp }>
          <TextButtonLink>
            Ainda não tem cadastro? Cadastre-se
          </TextButtonLink>
        </ButtonLink>

      </Container>
    </Background>
  )
}

export default SignIn