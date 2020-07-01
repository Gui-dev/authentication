import styled from 'styled-components'
import { MdEmail, MdVpnKey, MdSend } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #232526;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 3rem;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 0.4rem;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, .3);

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 1rem;
`

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const UserIcon = styled(MdEmail)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.1rem;
  height: 2.1rem;
  color: #FFF;
`

export const PasswordIcon = styled(MdVpnKey)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.1rem;
  height: 2.1rem;
  color: #FFF;
`

export const Input = styled.input`
  font-size: 1.6rem;
  color: #FFF;
  width: 100%;
  height: 2.4rem;
  padding: 1rem 1rem 2rem 3rem;
  background: transparent;
  border: 0;
  border-bottom: 2px;
  border-bottom-color: #CCC;
  border-bottom-style: solid;

  &::placeholder {
    color: #666;
  }
`

export const ButtonSubmit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #414345, #232526);
  border: 1px solid #333;
  border-radius: 4px;
  transition: background .2s ease-in;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #232526, #414345);
  }
`

export const ButtonIcon = styled(MdSend)`
  width: 2.1rem;
  height: 2.1rem;
  color: #FFF;
  margin-right: 1rem;
`

export const TextButton = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: #FFF;
`


