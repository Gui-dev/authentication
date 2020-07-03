import * as Yup from 'yup'

export const authValidation = Yup.object().shape( {
  email: Yup.string().email( 'Precisa ser um email válido' ).required( 'Campo e-mail é obrigátorio' ),
  password: Yup.string().required( 'Campo senha é obrigátorio' ),
} )