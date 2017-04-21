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
import WorkspacePage from './pages/WorkspacePage'
import NotFoundPage from './pages/NotFoundPage'
import MyFlowsPage from './pages/MyFlowsPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={requireAuth(IndexPage)}/>
      <Route exact path="/signin" component={SigninPage}/>
      <Route exact path="/signup" component={SignupPage}/>
      <Route exact path="/workspace" component={requireAuth(WorkspacePage)}/>
      <Route exact path="/my-flows" component={requireAuth(MyFlowsPage)}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
)

export default Routes