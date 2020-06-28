import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

interface TokenPayload {
  id: string,
  iat: number,
  exp: number,
}

const auth = async ( request: Request, response: Response, next: NextFunction ) => {

  const authResponse = request.headers.authorization

  if( !authResponse ) {
    return response.sendStatus( 401 )
  }

  const [ , token ] = authResponse.split( ' ' )

  try {
    const { id }  = await promisify( jwt.verify )( token, 'authsecret' ) as TokenPayload
    request.userId = id

    return next()
  } catch {
    return response.sendStatus( 401 )
  }

  return next()
}

export default auth
