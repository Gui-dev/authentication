import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'

import Input from './../../../components/Input'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`

export const ButtonSubmit = styled(RectButton)`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #333;
  border-radius: 4px;
`

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`

export const ButtonLink = styled(TouchableOpacity)`
  margin-top: 30px;
`

export const TextButtonLink = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`