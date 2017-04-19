import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import { flatten } from 'lodash/fp'
import { compose, withState, withHandlers } from 'recompose'

import MainLayout from '../layouts/MainLayout'
import SideNavLayout from '../layouts/SideNavLayout'
import CreateProjectModal from '../views/CreateProjectModal'

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
          <CreateProjectButton/>
          {
            fakeProjects.map(project => <ProjectCard key={project.name} project={project}/>)
          }
        </ProjectListLayout>
      </div>
    </SideNavLayout>
  </MainLayout>
)

const CreateProjectUIButton = ({onClick}) => (
  <Card style={{width: '100%', height: '100%'}} onClick={onClick}>
    <Card.Content style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="plus" size="huge" style={{color: 'initial'}}/>
    </Card.Content>
  </Card>
)

const CreateProjectButton = compose(
  withState('modalVisible', 'setModalVisible', false),
  withHandlers({
    openModal: ({setModalVisible}) => () => setModalVisible(true),
    closeModal: ({setModalVisible}) => () => setModalVisible(false)
  })
)(({modalVisible, openModal, closeModal}) => (
  <CreateProjectModal trigger={<CreateProjectUIButton onClick={openModal}/>} open={modalVisible} onOpen={openModal}
                      onClose={closeModal}/>
))

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