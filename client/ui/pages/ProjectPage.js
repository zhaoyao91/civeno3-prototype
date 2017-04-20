import React from 'react'
import { compose, withProps } from 'recompose'

import MainLayout from '../layouts/MainLayout'
import ProjectLayout from '../layouts/ProjectLayout'

export default compose(
  withProps(({match}) => ({
    projectId: match.params.projectId
  }))
)(({projectId}) => (
  <MainLayout>
    <ProjectLayout projectId={projectId}>
      <h1>Project {projectId}</h1>
    </ProjectLayout>
  </MainLayout>
))