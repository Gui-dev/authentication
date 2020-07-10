import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Background from './../../../components/Background'
import { Container, Title, Form, FormInput, ButtonSubmit, TextButton,
  ButtonLink, TextButtonLink
} from './style'

const SignUp: React.FC = () => {

  const navigation = useNavigation()

  const handleNavigationSignIn = () => {
    navigation.navigate( 'SignIn' )
  }

  return (
    <Background>
      <Container>
        <Title>Register</Title>

        <Form>

          <FormInput 
            icon="person-outline"
            autoCorrect={ false }
            autoCapitalize="none"
            placeholder="Digite seu nome"
          />
          
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
              Cadastrar
            </TextButton>
          </ButtonSubmit>

        </Form>

        <ButtonLink onPress={ handleNavigationSignIn }>
          <TextButtonLink>
            Já tem cadastro? Entre
          </TextButtonLink>
        </ButtonLink>

      </Container>
    </Background>
  )
}

export default SignUp;