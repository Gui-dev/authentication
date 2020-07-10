import styled from 'styled-components/native'

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
  align-self: stretch;
  margin-top: 50px;
  padding: 0 20px;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`
