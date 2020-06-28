import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from './../models/User'

class LoginController {

  async store( request: Request, response: Response ) {

    const { email, password } = request.body
    const repository = getRepository( User )

    const user = await repository.findOne( { where: { email } } )

    if( !user ) {
      console.log( 'email' )
      return response.sendStatus( 401 )
    }

    if( !( await user.comparePassword( password ) ) ) {
      console.log( 'senha' )
      return response.sendStatus( 401 )
    }

    return response.status( 201 ).json( {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
       },
      token: user.generateToken( user.id )
    } )
  }
}

export default new LoginController()
