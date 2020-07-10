import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Background from './../../../components/Background'
import { Container, Title, Form, FormInput, ButtonSubmit, TextButton, 
  ButtonLink, TextButtonLink } from './style'

const SignIn: React.FC = () => {

  const navigation = useNavigation()

  const handleNavigationSignUp = () => {
    navigation.navigate( 'SignUp' )
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
          />
          
          <FormInput 
            icon="lock-open"
            secureTextEntry={ true }
            autoCorrect={ false }
            autoCapitalize="none"
            placeholder="Digite sua senha"
          />

          <ButtonSubmit>
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