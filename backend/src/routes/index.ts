import { Router } from 'express'

import User from './../app/controllers/UserController'
import Login from './../app/controllers/LoginController'

import auth from './../app/middlewares/auth'


const routes = Router()

routes.post( '/users', User.store )
routes.post( '/login', Login.store )

routes.use( auth )

routes.get( '/users', User.show )


export default routes
