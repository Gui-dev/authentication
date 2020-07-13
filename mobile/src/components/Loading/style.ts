import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

export const LoadingContainer = styled(ActivityIndicator).attrs({
  size: 'large',
  // color: `${ ( props: any ) => props.styleColor ? props.styleColor : '#FFF' }`,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`
