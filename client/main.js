import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './ui/Routes'

// load styles
import 'semantic-ui-css/semantic.min.css'

// render ui
ReactDOM.render(
  <Routes/>,
  document.getElementById('react-root')
)