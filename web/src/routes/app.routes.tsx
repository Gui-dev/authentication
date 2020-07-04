import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './../pages/App/Home'

const App: React.FC = () => {

  return (
    <Switch>
      <Route path="/" component={ Home }/>
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default App