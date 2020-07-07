import * as Yup from 'yup'

export const signUpValidation = Yup.object().shape( {
  name: Yup.string().required(),
  email: Yup.string().email( 'Precisa ser um email válido' ).required( 'Campo e-mail é obrigátorio' ),
  password: Yup.string().min(6).required( 'Campo senha é obrigátorio' ),
  confirmPassword: Yup.string()
    .oneOf( [ Yup.ref( 'password' ) ], 'Senhas não conferem' )
    .required( 'Campo confirmar senha é obrigátorio' )
} )