import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import requireAuth from './hocs/require_auth'
import IndexPage from './pages/IndexPage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={requireAuth(IndexPage)}/>
      <Route exact path="/signin" component={SigninPage}/>
      <Route exact path="/signup" component={SignupPage}/>
    </Switch>
  </BrowserRouter>
)

export default Routes