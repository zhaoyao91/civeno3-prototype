import React from 'react'
import ReactDOM from 'react-dom'

import App from './ui/App'

// load styles
import 'semantic-ui-css/semantic.min.css'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

// render ui
ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
)