import React from 'react'

import Background from './../Background'
import { LoadingContainer } from './style'

interface LoadingProps {
  styleColor?: string 
}

const Loading: React.FC<LoadingProps> = ( { styleColor = '#FFF' } ) => {

  return (
    <Background>
      <LoadingContainer color={ styleColor }/>
    </Background>
  )
}

export default Loading
