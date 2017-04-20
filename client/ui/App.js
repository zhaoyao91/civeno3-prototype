import React from 'react'
import Alert from 'react-s-alert'

import Routes from './Routes'

// used to hold all global components
const App = () => (
  <div>
    <Routes/>
    <Alert stack={{limit: 3}}/>
  </div>
)

export default App