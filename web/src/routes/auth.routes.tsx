import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from './../pages/Auth/SignIn'
import SignUp from './../pages/Auth/SignUp'

const Auth: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={ SignIn }/>
      <Route path="/register" component={ SignUp }/>
      <Redirect from="*" to="/"/>
    </Switch>
  )
}

export default Auth