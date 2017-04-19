import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { flatten } from 'lodash/fp'

import MainLayout from '../layouts/MainLayout'
import SideNavLayout from '../layouts/SideNavLayout'

const fakeProjects = [
  {name: '打到帝国主义'},
  {name: '中华人民共和国万岁'},
  {name: '打到帝国主义打到帝国主义'},
  {name: '中华人民共和国万岁中华人民共和国万岁'},
  {name: '打到帝国主义打到帝国主义打到帝国主义'},
  {name: '吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮'},
]

export default () => (
  <MainLayout>
    <SideNavLayout>
      <div style={{width: '100%', height: '100%', padding: '1em'}}>
        <ProjectListLayout>
          <AddProjectButton/>
          {
            fakeProjects.map(project => <ProjectCard key={project.name} project={project}/>)
          }
        </ProjectListLayout>
      </div>
    </SideNavLayout>
  </MainLayout>
)

const AddProjectButton = () => (
  <Card style={{width: '100%', height: '100%'}}>
    <Card.Content style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="plus" size="huge"/>
    </Card.Content>
  </Card>
)

const ProjectCard = ({project}) => (
  <Card style={{width: '100%', height: '100%'}}>
    <Card.Content>
      <Card.Header>
        {project.name}
      </Card.Header>
    </Card.Content>
  </Card>
)

const ProjectListLayout = ({children}) => (
  <div>
    {
      flatten(children).map((item, index) => (
        <div key={index}
             style={{width: '200px', height: '150px', float: 'left', marginRight: '1em', marginBottom: '1em'}}>
          {item}
        </div>
      ))
    }
  </div>
)