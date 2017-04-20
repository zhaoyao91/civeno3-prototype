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
import MyProjectsPage from './pages/MyProjectsPage'
import WorkspacePage from './pages/WorkspacePage'
import ProjectPage from './pages/ProjectPage'
import NotFoundPage from './pages/NotFoundPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={requireAuth(IndexPage)}/>
      <Route exact path="/signin" component={SigninPage}/>
      <Route exact path="/signup" component={SignupPage}/>
      <Route exact path="/my-projects" component={requireAuth(MyProjectsPage)}/>
      <Route exact path="/workspace" component={requireAuth(WorkspacePage)}/>
      <Route exact path="/project/:projectId" component={requireAuth(ProjectPage)}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
)

export default Routes