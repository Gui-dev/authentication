import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './../pages/Auth/SignIn'
import SignUp from './../pages/Auth/SignUp'

const Auth: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={ SignIn }/>
      <Route path="/register" exact component={ SignUp }/>
    </Switch>
  )
}

export default Auth