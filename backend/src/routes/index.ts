import { Router } from 'express'

import User from './../app/controllers/UserController'
import Login from './../app/controllers/LoginController'

const routes = Router()

routes.post( '/users', User.store )

routes.post( '/login', Login.store )

export default routes
