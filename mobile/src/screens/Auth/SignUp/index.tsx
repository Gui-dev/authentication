import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Background from './../../../components/Background'
import { Container, Title, Form, FormInput, ButtonSubmit, TextButton,
  ButtonLink, TextButtonLink
} from './style'

import { useAuth } from './../../../contexts/auth'

const SignUp: React.FC = () => {

  const { signUp, loading } = useAuth()
  const navigation = useNavigation()
  const [ name, setName ] = useState<string>( '' )
  const [ email, setEmail ] = useState<string>( '' )
  const [ password, setPassword ] = useState<string>( '' )
  const [ confirmPassword, setConfirmPassword ] = useState<string>( '' )

  const handleNavigationSignIn = () => {
    navigation.navigate( 'SignIn' )
  }

  const handleSubmit = () => {
    signUp( name, email, password, confirmPassword )
  }

  return (
    <Background>
      <Container>
        <Title>Register</Title>

        <Form>

          <FormInput 
            icon="person-outline"
            autoCorrect={ false }
            autoCapitalize="words"
            placeholder="Digite seu nome"
            value={ name }
            onChangeText={ setName }
          />
          
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
          
          <FormInput 
            icon="lock-open"
            secureTextEntry={ true }
            autoCorrect={ false }
            autoCapitalize="none"
            placeholder="Confirmar sua senha"
            value={ confirmPassword }
            onChangeText={ setConfirmPassword }
          />

          <ButtonSubmit onPress={ handleSubmit }>
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