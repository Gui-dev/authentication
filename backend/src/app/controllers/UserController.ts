import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from './../models/User'
import { truncate } from 'fs'

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

  async show( request: Request, response: Response ) {

    const id = request.userId
    const repository = getRepository( User )
    const userData = await repository.findOne( { where: { id } } )

    if( !userData ) {
      return response.sendStatus( 401 )
    }

    const user = {
      id: userData?.id,
      name: userData?.name,
      email: userData?.email,
    }

    return response.status( 201 ).json( user )
  }

  async update( request: Request, response: Response ) {

    const { id } = request.params
    const { name }= request.body
    const repository = getRepository( User )

    const userData = await repository.findOne( { where: { id } } )

    if( !userData ) {
      return response.sendStatus( 401 )
    }

    const user = await repository.update( id, { name } )

    if( user.affected === 1 ) {
      const userAffected = await repository.findOne( { where: { id } } )
      const userUpdated = {
        id: userAffected?.id,
        name: userAffected?.name,
        email: userAffected?.email,
      }
      return response.status( 201 ).json( userUpdated )
    }

    return response.sendStatus( 401 )
  }
}

export default new UserController()
