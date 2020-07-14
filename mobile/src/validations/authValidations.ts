import * as Yup from 'yup'

export const signInValidation = Yup.object().shape( {
  email: Yup.string().email().required( 'Campo email é obrigátorio' ),
  password: Yup.string().required( 'Campo senha é obrigátorio' ),
} )

export const signUpValidation = Yup.object().shape( {
  name: Yup.string().required( 'Campo nome é obrigátorio' ),
  email: Yup.string().email().required( 'Campo email é obrigátorio' ),
  password: Yup.string().min(6, 'Senha tem que ter mais de 6 caracteres').required( 'Campo senha é obrigátorio' ),
  confirmPassword: Yup.string()
    .oneOf( [ Yup.ref( 'password' ) ], 'Senhas não conferem' )
    .required( 'Campo confirmar senha é obrigátorio' )
} )