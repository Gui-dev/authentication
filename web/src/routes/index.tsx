import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Auth from './auth.routes'

const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  )
}

export default Routes