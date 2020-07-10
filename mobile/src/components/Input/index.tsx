import React, { forwardRef } from 'react'
import { NativeSyntheticEvent, TextInputProps, TextInputChangeEventData } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, MyInputText } from './style'

interface Props extends NativeSyntheticEvent<TextInputChangeEventData> {
  style: object | [],
  icon: string | null,
  rest: object,
}

const Input: React.FC<Props & any> = ( { style = {}, icon = null, ...rest } ) => {

  return (
    <Container style={ style }>
      { icon && <Icon name={icon} size={ 20 } color="rgba(255, 255, 255, .6)"/> }
      <MyInputText { ...rest } />
    </Container>
  )
}

export default Input