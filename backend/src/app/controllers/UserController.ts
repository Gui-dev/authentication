import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from './../models/User'

class UserController {

  async store( request: Request, response: Response ) {

    const { name, email, password } = request.body
    const repository = getRepository( User )

    const userExists = await repository.findOne( { where: { email } } )

    if( userExists ) {
      return response.sendStatus( 409 )
    }

    const user = repository.create( { name, email, password } )
    await repository.save( user )

    return response.status( 201 ).json( user )
  }
}

export default new UserController()
