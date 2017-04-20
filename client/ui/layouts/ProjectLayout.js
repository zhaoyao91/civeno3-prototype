import React from 'react'
import { Menu } from 'semantic-ui-react'

export default ({children, projectId}) => (
  <Layout top={<ProjectNavbar projectId={projectId}/>} main={children}/>
)

const ProjectNavbar = ({projectId}) => (
  <Menu borderless>
    <Menu.Item>
      {projectId}
    </Menu.Item>
  </Menu>
)

const Layout = ({top, main}) => (
  <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
    <div>{top}</div>
    <div style={{height: '100%', overflow: 'auto'}}>{main}</div>
  </div>
)