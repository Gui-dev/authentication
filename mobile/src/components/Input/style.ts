import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 46px;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
`

export const MyInputText = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, .6)'
})`
  flex: 1;
  font-size: 16px;
  color: #FFF;
  margin-left: 10px;
`
