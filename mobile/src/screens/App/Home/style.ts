import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
`

export const Person = styled.Text`
  font-size: 14px;
  color: #666;
`

export const ButtonLink = styled(TouchableOpacity)`
  margin-top: 15px;
`

export const ButtonLinkText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #09F;
`
